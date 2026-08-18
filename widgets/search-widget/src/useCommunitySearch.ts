import { useState, useEffect, useRef } from 'react'

const COMMUNITY_BASE = 'https://siemens-en-sandbox-community.insided.com'
const DEBOUNCE_MS = 300
const MIN_LENGTH = 2

export interface CommunityHit {
  title: string
  type: string
  topic_url: string
  url: string
}

async function fetchSearchToken(): Promise<{ client_id: string; token: string } | null> {
  try {
    const res = await fetch('/search/searchToken')
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

async function queryAlgolia(clientId: string, token: string, query: string): Promise<CommunityHit[]> {
  const res = await fetch(
    `https://${clientId}-dsn.algolia.net/1/indexes/*/queries?x-algolia-application-id=${clientId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Algolia-API-Key': token,
        'X-Algolia-Application-Id': clientId,
      },
      body: JSON.stringify({
        requests: [{
          indexName: 'siemens-en-sandbox-unified',
          params: `query=${encodeURIComponent(query)}&hitsPerPage=6&attributesToRetrieve=title,content_type,topic_url&attributesToHighlight=title`,
        }],
      }),
    }
  )
  const data = await res.json()
  return (data.results?.[0]?.hits ?? []).map((h: Record<string, string>) => ({
    title: h.title ?? '',
    type: h.content_type ?? '',
    topic_url: h.topic_url ? `${COMMUNITY_BASE}${h.topic_url}` : '',
    url: h.topic_url ? `${COMMUNITY_BASE}${h.topic_url}` : '',
  }))
}

// null = not yet fetched, false = fetch failed, object = valid token
let tokenCache: { client_id: string; token: string } | null | false = null

export function useCommunitySearch(searchText: string) {
  const [hits, setHits] = useState<CommunityHit[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [available, setAvailable] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (searchText.length < MIN_LENGTH) {
      setHits([])
      return
    }
    if (!available) return

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort()
      abortRef.current = new AbortController()

      setIsFetching(true)
      try {
        if (tokenCache === null) {
          const fetched = await fetchSearchToken()
          tokenCache = fetched ?? false
        }
        if (!tokenCache) {
          setAvailable(false)
          return
        }
        const results = await queryAlgolia(tokenCache.client_id, tokenCache.token, searchText)
        setHits(results)
      } catch (e) {
        if ((e as Error).name !== 'AbortError') setHits([])
      } finally {
        setIsFetching(false)
      }
    }, DEBOUNCE_MS)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [searchText, available])

  return { hits, isFetching, available }
}
