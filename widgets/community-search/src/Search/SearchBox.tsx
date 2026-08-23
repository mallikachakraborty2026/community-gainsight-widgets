import { useState } from "react";
import { SearchButton } from "./SearchButton";
import { useSearchSuggestions } from "./hooks/useSearchSuggestions";
import "./SearchBox.css";

export function SearchBox() {
  const [searchText, setSearchText] = useState("");

  const {
    hits,
    isFetching,
    available,
  } = useSearchSuggestions(searchText);

  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <SearchButton />

      {isFetching && (
        <div>Loading...</div>
      )}

      {available && hits.length > 0 && (
        <ul className="search-results">
          {hits.map((hit, index) => (
            <li key={`${hit.mediatype}-${hit.term}-${index}`}>
              <div>
                <strong>{hit.term}</strong>
              </div>

              {hit.title && (
                <div>{hit.title}</div>
              )}

              {hit.description && (
                <div>{hit.description}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}