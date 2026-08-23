import { useState, useEffect, useRef } from "react";

const DEBOUNCE_MS = 300;
const MIN_LENGTH = 2;

export interface SearchHit {
  term: string;
  highlighted: string;
  mediatype: "WEB" | "PRODUCT";
  subtype: string;
  url: string | null;
  title: string | null;
  description: string | null;
  label: string | null;
}

interface RawWebSuggestion {
  term: string;
  type: string;
  highlighted: string;
}

interface RawProductDocument {
  title?: string;
  description?: string;
  url?: string;
  label?: string;
}

interface RawProductSuggestion {
  term: string;
  type: string;
  highlighted: string;
  document?: RawProductDocument;
}

const GQL_QUERY = `
  query GlobalSearchSuggestions($web: Suggestion!, $product: Suggestion!) {
    suggestionsWeb: suggestions(suggestion: $web) {
      term
      type
      highlighted
    }

    suggestionsProduct: suggestions(suggestion: $product) {
      term
      type
      highlighted
      document {
        title
        description
        url
        label
      }
    }
  }
`;

async function querySiemensSearch(q: string): Promise<SearchHit[]> {
  const connector = new window.WidgetServiceSDK().connectors;

  const response = await connector.execute({
    permalink: "siemens-search-api",
    method: "POST",
    body: {
      query: GQL_QUERY,
      variables: {
        web: {
          q,
          limit: 5,
          filter: {
            includes: {
              languages: {
                eq: "EN",
              },
              regions: {
                eq: "US",
              },
            },
            mediatypes: ["WEB"],
          },
        },

        product: {
          q,
          limit: 3,
          filter: {
            includes: {
              languages: {
                eq: "EN",
              },
              regions: {
                eq: "US",
              },
            },
            mediatypes: ["PRODUCT"],
          },
        },
      },
    },
  });

  console.log(
    "[useSearchSuggestions] raw API response:",
    JSON.stringify(response, null, 2)
  );

  const data = response?.data;

  const webRaw: RawWebSuggestion[] =
    data?.suggestionsWeb ?? [];

  const productRaw: RawProductSuggestion[] =
    data?.suggestionsProduct ?? [];

  const web: SearchHit[] = webRaw.map((s) => ({
    term: s.term,
    highlighted: s.highlighted ?? s.term,
    mediatype: "WEB",
    subtype: s.type ?? "",
    url: null,
    title: null,
    description: null,
    label: null,
  }));

  const products: SearchHit[] = productRaw.map((s) => ({
    term: s.term,
    highlighted: s.highlighted ?? s.term,
    mediatype: "PRODUCT",
    subtype: s.type ?? "",
    url: s.document?.url ?? null,
    title: s.document?.title ?? null,
    description: s.document?.description ?? null,
    label: s.document?.label ?? null,
  }));

  return [...web, ...products];
}

export function useSearchSuggestions(searchText: string) {
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const timerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (searchText.trim().length < MIN_LENGTH) {
      setHits([]);
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      setIsFetching(true);

      try {
        const results = await querySiemensSearch(
          searchText.trim()
        );

        setHits(results);
      } catch (e) {
        console.error(
          "[useSearchSuggestions] Search failed:",
          e
        );

        setHits([]);
      } finally {
        setIsFetching(false);
      }
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchText]);

  return {
    hits,
    isFetching,
    available: true,
  };
}