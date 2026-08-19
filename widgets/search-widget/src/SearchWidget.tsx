import { useState, useCallback } from 'react'
import { useCommunitySearch, type SearchHit, SIEMENS_SEARCH_URL, COMMUNITY_SEARCH_URL } from './useCommunitySearch'

const COMMUNITY_SEARCH_URL = 'https://siemens-en-sandbox-community.insided.com/search'

function WebItem({ hit, onSelect }: { hit: SearchHit; onSelect: (hit: SearchHit) => void }) {
  return (
    <li
      className="suggestion-item"
      role="option"
      aria-selected="false"
      onMouseDown={(e) => { e.preventDefault(); onSelect(hit) }}
      // highlighted contains <mark> tags from the API — same source as siemens.com header
      dangerouslySetInnerHTML={{ __html: hit.highlighted }}
    />
  )
}

function ProductItem({ hit }: { hit: SearchHit }) {
  if (!hit.url || !hit.title) return null
  return (
    <div className="product-item">
      <a
        className="product-link"
        href={hit.url}
        target="_blank"
        rel="noreferrer noopener"
        onMouseDown={(e) => e.preventDefault()}
        dangerouslySetInnerHTML={{ __html: hit.title }}
      />
      {hit.label && <div className="product-by">by {hit.label}</div>}
      {hit.description && <div className="product-desc">{hit.description}</div>}
    </div>
  )
}

export function SearchWidget() {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)

  const { hits, isFetching } = useCommunitySearch(inputValue)
  const webHits = hits.filter(h => h.mediatype === 'WEB')
  const productHits = hits.filter(h => h.mediatype === 'PRODUCT')
  const hasHits = hits.length > 0

  const handleSubmit = useCallback(
    (term = inputValue) => {
      if (!term.trim()) return
      setOpen(false)
      window.location.href = `${COMMUNITY_SEARCH_URL}?q=${encodeURIComponent(term.trim())}`
    },
    [inputValue]
  )

  const handleSelectWeb = useCallback((hit: SearchHit) => {
    setOpen(false)
    window.location.href = `${COMMUNITY_SEARCH_URL}?q=${encodeURIComponent(hit.term)}`
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
        <div className="suggestions-panel" role="listbox">
          {webHits.length > 0 && (
            <div className="suggestions-section" role="group">
              <div className="section-header">Search suggestions</div>
              <ul className="suggestions-list">
                {webHits.map((hit) => (
                  <WebItem key={`web-${hit.term}`} hit={hit} onSelect={handleSelectWeb} />
                ))}
              </ul>
            </div>
          )}

          {productHits.length > 0 && (
            <div className="suggestions-section suggestions-products" role="group">
              <div className="section-header">Products</div>
              {productHits.map((hit) => (
                <ProductItem key={`product-${hit.term}`} hit={hit} />
              ))}
              <a
                className="view-all-products"
                href={`${SIEMENS_SEARCH_URL}?query=${encodeURIComponent(inputValue)}&tab=2`}
                target="_blank"
                rel="noreferrer noopener"
                onMouseDown={(e) => e.preventDefault()}
              >
                View all products
              </a>
            </div>
          )}
        </div>
      )}

      {open && isFetching && inputValue.length >= 2 && !hasHits && (
        <div className="suggestions-loading">Loading…</div>
      )}
    </div>
  )
}
