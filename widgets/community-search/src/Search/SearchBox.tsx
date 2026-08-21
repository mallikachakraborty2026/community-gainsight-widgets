import { SearchButton } from "./SearchButton";

export function SearchBox() {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
      />

      <SearchButton />
    </div>
  );
}