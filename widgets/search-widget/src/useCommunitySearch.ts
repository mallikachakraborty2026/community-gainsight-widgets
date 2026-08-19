import { useState, useEffect, useRef } from 'react'

const SEARCH_API = 'https://api.dc.siemens.com/search'
const DEBOUNCE_MS = 300
const MIN_LENGTH = 2

// TODO: add community-only filter parameter once the AI Search API supports it
export const SIEMENS_SEARCH_URL = 'https://www.siemens.com/en-us/search.html'
export const COMMUNITY_SEARCH_URL = 'https://siemens-en-sandbox-community.insided.com/search'

export interface SearchHit {
  term: string
  highlighted: string
  mediatype: 'WEB' | 'PRODUCT'
  subtype: string
  url: string | null
  title: string | null
  description: string | null
  label: string | null
}

interface RawWebSuggestion { term: string; type: string; highlighted: string }
interface RawProductDocument { title?: string; description?: string; url?: string; label?: string }
interface RawProductSuggestion { term: string; type: string; highlighted: string; document?: RawProductDocument }

const GQL_QUERY = `
  query GlobalSearchSuggestions($web: Suggestion!, $product: Suggestion!) {
    suggestionsWeb: suggestions(suggestion: $web) { term type highlighted }
    suggestionsProduct: suggestions(suggestion: $product) {
      term type highlighted
      document { title description url label }
    }
  }
`

async function querySiemensAI(q: string, signal: AbortSignal): Promise<SearchHit[]> {
  const res = await fetch(SEARCH_API, {
    method: 'POST',
    signal,
    headers: {
      'content-type': 'application/json',
      'Authorization': 'anonymous',
      'X-Siemens-One-Preview': 'enabled',
    },
    body: JSON.stringify({
      query: GQL_QUERY,
      variables: {
        web: {
          q,
          limit: 5,
          filter: {
            includes: { languages: { eq: 'EN' }, regions: { eq: 'US' } },
            mediatypes: ['WEB'],
          },
        },
        product: {
          q,
          limit: 3,
          filter: {
            includes: { languages: { eq: 'EN' }, regions: { eq: 'US' } },
            mediatypes: ['PRODUCT'],
          },
        },
      },
    }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const { data, errors } = await res.json()
  if (errors?.length) throw new Error(errors[0].message)
  console.log('[useCommunitySearch] raw API response:', JSON.stringify(data, null, 2))

  const webRaw: RawWebSuggestion[] = data?.suggestionsWeb ?? []
  const productRaw: RawProductSuggestion[] = data?.suggestionsProduct ?? []

  const web: SearchHit[] = webRaw.map(s => ({
    term: s.term,
    highlighted: s.highlighted ?? s.term,
    mediatype: 'WEB' as const,
    subtype: s.type ?? '',
    url: null,
    title: null,
    description: null,
    label: null,
  }))

  const products: SearchHit[] = productRaw.map(s => ({
    term: s.term,
    highlighted: s.highlighted ?? s.term,
    mediatype: 'PRODUCT' as const,
    subtype: s.type ?? '',
    url: s.document?.url ?? null,
    title: s.document?.title ?? null,
    description: s.document?.description ?? null,
    label: s.document?.label ?? null,
  }))

  return [...web, ...products]
}

export function useCommunitySearch(searchText: string) {
  const [hits, setHits] = useState<SearchHit[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (searchText.length < MIN_LENGTH) {
      setHits([])
      return
    }

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort()
      abortRef.current = new AbortController()

      setIsFetching(true)
      try {
        const results = await querySiemensAI(searchText, abortRef.current.signal)
        setHits(results)
      } catch (e) {
        if ((e as Error).name !== 'AbortError') setHits([])
      } finally {
        setIsFetching(false)
      }
    }, DEBOUNCE_MS)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [searchText])

  return { hits, isFetching, available: true }
}
