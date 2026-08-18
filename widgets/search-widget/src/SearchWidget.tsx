import { useState, useCallback } from 'react'
import { useCommunitySearch, type SearchHit, SIEMENS_SEARCH_URL } from './useCommunitySearch'

function HitItem({ hit, onSelect }: { hit: SearchHit; onSelect: (hit: SearchHit) => void }) {
  return (
    <li
      className="suggestion-item"
      onMouseDown={(e) => { e.preventDefault(); onSelect(hit) }}
    >
      <div className="hit-content">
        <span className="hit-title">{hit.title ?? hit.term}</span>
        {hit.description && <span className="hit-desc">{hit.description}</span>}
      </div>
      <span className="hit-type">{hit.mediatype === 'PRODUCT' ? 'Product' : hit.subtype}</span>
    </li>
  )
}

export function SearchWidget() {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)

  const { hits, isFetching } = useCommunitySearch(inputValue)
  const hasHits = hits.length > 0

  const handleSubmit = useCallback(
    (term = inputValue) => {
      if (!term.trim()) return
      setOpen(false)
      window.location.href = `${SIEMENS_SEARCH_URL}?query=${encodeURIComponent(term.trim())}`
    },
    [inputValue]
  )

  const handleSelectHit = useCallback((hit: SearchHit) => {
    setOpen(false)
    if (hit.url) {
      window.open(hit.url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = `${SIEMENS_SEARCH_URL}?query=${encodeURIComponent(hit.term)}`
    }
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
          placeholder="Search Siemens…"
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
            <HitItem key={`${hit.mediatype}-${hit.term}`} hit={hit} onSelect={handleSelectHit} />
          ))}
        </ul>
      )}

      {open && isFetching && inputValue.length >= 2 && !hasHits && (
        <div className="suggestions-loading">Loading…</div>
      )}
    </div>
  )
}
