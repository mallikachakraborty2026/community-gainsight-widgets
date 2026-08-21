import { SearchButton } from "./SearchButton";
import "./SearchBox.css";
export function SearchBox() {
  return (
    <div className="search-box">
      <h1>Search Siemens Community</h1>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
      />

      <SearchButton />
    </div>
  );
}