import { useState, useRef, useCallback } from 'react'
import { useSearchSuggestions, type WebSuggestion, type ProductSuggestion } from './useSearchSuggestions'

const COMMUNITY_SEARCH_URL = 'https://siemens-en-sandbox-community.insided.com/search'

// Display order as per Siemens search spec
const WEB_TYPE_ORDER = ['KEYWORDS', 'KEYPHRASES', 'QUESTIONS'] as const
const MAX_PER_TYPE = 2

function navigate(term: string) {
  window.location.href = `${COMMUNITY_SEARCH_URL}?q=${encodeURIComponent(term)}`
}

function WebSuggestionItem({ s, onSelect }: { s: WebSuggestion; onSelect: (term: string) => void }) {
  return (
    <li
      className="suggestion-item"
      onMouseDown={(e) => { e.preventDefault(); onSelect(s.term) }}
      dangerouslySetInnerHTML={{ __html: s.highlighted }}
    />
  )
}

function ProductSuggestionItem({ s, onSelect }: { s: ProductSuggestion; onSelect: (term: string) => void }) {
  return (
    <li
      className="suggestion-item suggestion-item--product"
      onMouseDown={(e) => { e.preventDefault(); onSelect(s.term) }}
    >
      <span className="product-label">{s.document.label}</span>
      <span dangerouslySetInnerHTML={{ __html: s.highlighted }} />
    </li>
  )
}

export function SearchWidget() {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const { suggestions, isFetching } = useSearchSuggestions(inputValue)

  const hasSuggestions =
    suggestions.suggestionsWeb.length > 0 || suggestions.suggestionsProduct.length > 0

  const handleSubmit = useCallback(
    (term = inputValue) => {
      if (!term.trim()) return
      setOpen(false)
      navigate(term.trim())
    },
    [inputValue]
  )

  const webByType = WEB_TYPE_ORDER.flatMap((type) =>
    suggestions.suggestionsWeb.filter((s) => s.type === type).slice(0, MAX_PER_TYPE)
  )

  return (
    <div className="search-widget">
      <form
        className="search-form"
        onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
      >
        <input
          ref={inputRef}
          type="search"
          className="search-input"
          placeholder="Search community…"
          value={inputValue}
          autoComplete="off"
          onChange={(e) => {
            setInputValue(e.currentTarget.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          aria-label="Search"
          aria-autocomplete="list"
          aria-expanded={open && hasSuggestions}
        />
        <button type="submit" className="search-btn" aria-label="Submit search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>

      {open && hasSuggestions && (
        <ul className="suggestions-list" role="listbox">
          {webByType.map((s) => (
            <WebSuggestionItem key={s.term + s.type} s={s} onSelect={handleSubmit} />
          ))}
          {suggestions.suggestionsProduct.length > 0 && (
            <>
              <li className="suggestions-divider">Products</li>
              {suggestions.suggestionsProduct.map((s) => (
                <ProductSuggestionItem key={s.term} s={s} onSelect={handleSubmit} />
              ))}
            </>
          )}
        </ul>
      )}

      {open && isFetching && inputValue.length >= 2 && !hasSuggestions && (
        <div className="suggestions-loading">Loading…</div>
      )}
    </div>
  )
}
