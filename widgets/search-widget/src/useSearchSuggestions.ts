import { useState, useEffect, useRef } from 'react'

const API_URL = 'https://api.dc.siemens.com/search'
const DEBOUNCE_MS = 500
const MIN_LENGTH = 2

export interface WebSuggestion {
  score: number
  term: string
  highlighted: string
  type: 'KEYWORDS' | 'KEYPHRASES' | 'QUESTIONS'
}

export interface ProductSuggestion {
  score: number
  term: string
  highlighted: string
  type: 'PRODUCT'
  document: {
    title: string
    description: string
    label: string
    url: string
  }
}

export interface Suggestions {
  suggestionsWeb: WebSuggestion[]
  suggestionsProduct: ProductSuggestion[]
}

const GRAPHQL_QUERY = `
  query GlobalSearchSuggestions($suggestionsWeb: Suggestion!, $suggestionsProduct: Suggestion!) {
    suggestionsWeb: suggestions(suggestion: $suggestionsWeb) {
      score term highlighted type
    }
    suggestionsProduct: suggestions(suggestion: $suggestionsProduct) {
      score term highlighted type
      document { title description label url }
    }
  }
`

function buildVariables(q: string) {
  const filter = (mediatype: string) => ({
    includes: { languages: { eq: 'EN' }, regions: { eq: 'US' } },
    mediatypes: [mediatype],
  })
  return {
    suggestionsWeb: { q, limit: 20, filter: filter('WEB') },
    suggestionsProduct: { q, limit: 3, filter: filter('PRODUCT') },
  }
}

export function useSearchSuggestions(searchText: string) {
  const [suggestions, setSuggestions] = useState<Suggestions>({ suggestionsWeb: [], suggestionsProduct: [] })
  const [isFetching, setIsFetching] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (searchText.length < MIN_LENGTH) {
      setSuggestions({ suggestionsWeb: [], suggestionsProduct: [] })
      return
    }

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort()
      abortRef.current = new AbortController()

      setIsFetching(true)
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: 'anonymous',
            'X-Siemens-One-Preview': 'enabled',
          },
          body: JSON.stringify({ query: GRAPHQL_QUERY, variables: buildVariables(searchText) }),
          signal: abortRef.current.signal,
        })
        const { data } = await res.json()
        setSuggestions({
          suggestionsWeb: data?.suggestionsWeb ?? [],
          suggestionsProduct: data?.suggestionsProduct ?? [],
        })
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setSuggestions({ suggestionsWeb: [], suggestionsProduct: [] })
        }
      } finally {
        setIsFetching(false)
      }
    }, DEBOUNCE_MS)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [searchText])

  return { suggestions, isFetching }
}
