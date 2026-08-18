import { useState, useCallback } from 'react'
import { useCommunitySearch, type CommunityHit } from './useCommunitySearch'

const COMMUNITY_SEARCH_URL = 'https://siemens-en-sandbox-community.insided.com/search'

const TYPE_LABEL: Record<string, string> = {
  question: 'Q&A',
  article: 'Article',
  event: 'Event',
  idea: 'Idea',
}

function HitItem({ hit, onSelect }: { hit: CommunityHit; onSelect: (hit: CommunityHit) => void }) {
  return (
    <li
      className="suggestion-item"
      onMouseDown={(e) => { e.preventDefault(); onSelect(hit) }}
    >
      <span className="hit-title">{hit.title}</span>
      {hit.type && <span className="hit-type">{TYPE_LABEL[hit.type] ?? hit.type}</span>}
    </li>
  )
}

export function SearchWidget() {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)

  const { hits, isFetching, available } = useCommunitySearch(inputValue)
  const hasHits = hits.length > 0

  const handleSubmit = useCallback(
    (term = inputValue) => {
      if (!term.trim()) return
      setOpen(false)
      window.location.href = `${COMMUNITY_SEARCH_URL}?q=${encodeURIComponent(term.trim())}`
    },
    [inputValue]
  )

  const handleSelectHit = useCallback((hit: CommunityHit) => {
    setOpen(false)
    window.location.href = hit.url
  }, [])

  return (
    <div className="search-widget">
      <form
        className="search-form"
        onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
      >
        <input
          type="search"
          className="search-input"
          placeholder="Search community…"
          value={inputValue}
          autoComplete="off"
          onChange={(e) => { setInputValue(e.currentTarget.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          aria-label="Search"
          aria-autocomplete="list"
          aria-expanded={open && hasHits}
        />
        <button type="submit" className="search-btn" aria-label="Submit search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>

      {open && hasHits && (
        <ul className="suggestions-list" role="listbox">
          {hits.map((hit) => (
            <HitItem key={hit.topic_url} hit={hit} onSelect={handleSelectHit} />
          ))}
        </ul>
      )}

      {open && isFetching && inputValue.length >= 2 && !hasHits && (
        <div className="suggestions-loading">Loading…</div>
      )}

      {open && !available && inputValue.length >= 2 && (
        <div className="suggestions-loading">Press Enter to search</div>
      )}
    </div>
  )
}
