import { useState, useCallback } from 'react'
import { useCommunitySearch, type SearchHit, COMMUNITY_SEARCH_URL } from './useCommunitySearch'

// Matches the IconAI from xd-universal-components
function IconAI() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="m15 9-4-1.5L15 6l1.5-4L18 6l4 1.5L18 9l-1.5 4L15 9Zm-8 8-5-2 5-2 2-5 2 5 5 2-5 2-2 5-2-5Z" />
    </svg>
  )
}

function WebItem({ hit, onSelect }: { hit: SearchHit; onSelect: (hit: SearchHit) => void }) {
  const isQuestion = hit.subtype === 'QUESTIONS'
  return (
    <li
      className={`suggestion-item${isQuestion ? ' suggestion-item--question' : ''}`}
      role="option"
      aria-selected="false"
      onMouseDown={(e) => { e.preventDefault(); onSelect(hit) }}
    >
      {isQuestion && <IconAI />}
      {/* highlighted contains <mark> tags from the API — same source as siemens.com header */}
      <span dangerouslySetInnerHTML={{ __html: hit.highlighted }} />
    </li>
  )
}

function ProductItem({ hit, onSelect }: { hit: SearchHit; onSelect: (hit: SearchHit) => void }) {
  if (!hit.title) return null
  return (
    <div
      className="product-item"
      onMouseDown={(e) => { e.preventDefault(); onSelect(hit) }}
    >
      <div
        className="product-link"
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

  const handleSelectProduct = useCallback((hit: SearchHit) => {
    setOpen(false)
    window.location.href = `${COMMUNITY_SEARCH_URL}?q=${encodeURIComponent(hit.term)}`
  }, [])

  return (
    <div className="search-widget">
      <form
        className="search-form"
        onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
      >
        {/* Overlay placeholder matching the siemens.com header style */}
        {inputValue === '' && (
          <span className="search-placeholder" aria-hidden="true">
            Search with AI <IconAI />
          </span>
        )}
        <input
          type="search"
          className="search-input"
          placeholder=" "
          value={inputValue}
          autoComplete="off"
          onChange={(e) => { setInputValue(e.currentTarget.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          aria-label="Search with AI"
          aria-autocomplete="list"
          aria-expanded={open && hasHits}
        />
        <button
          type="submit"
          className="search-btn"
          aria-label="Submit search"
          disabled={inputValue.trim().length < 2}
        >
          <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M19.862 18.316 15.12 13.574a.464.464 0 0 0-.332-.137h-.516a8.123 8.123 0 1 0-.836.836v.516c0 .124.05.243.137.332l4.742 4.742a.469.469 0 0 0 .664 0l.883-.883a.469.469 0 0 0 0-.664ZM8.125 14.374a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z"/>
          </svg>
        </button>
      </form>

      {open && hasHits && (
        <div className="suggestions-panel" role="listbox">
          <div className="suggestions-columns">
            {webHits.length > 0 && (
              <div className="suggestions-col" role="group">
                <div className="section-header">Search Suggestions</div>
                <ul className="suggestions-list">
                  {webHits.map((hit) => (
                    <WebItem key={`web-${hit.term}`} hit={hit} onSelect={handleSelectWeb} />
                  ))}
                </ul>
              </div>
            )}
            {productHits.length > 0 && (
              <div className="suggestions-col" role="group">
                <div className="section-header">Products</div>
                {productHits.map((hit) => (
                  <ProductItem key={`product-${hit.term}`} hit={hit} onSelect={handleSelectProduct} />
                ))}
                <a
                  className="view-all-products"
                  href={`${COMMUNITY_SEARCH_URL}?q=${encodeURIComponent(inputValue)}`}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  View all product results
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {open && isFetching && inputValue.length >= 2 && !hasHits && (
        <div className="suggestions-loading">Loading…</div>
      )}
    </div>
  )
}
