"use client";

import SearchInputComponent from "../components/SearchInput";
import { useSearchStore } from "@store/search";

const SearchInput = () => {
  const { search, setSearch } = useSearchStore();

  return (
    <SearchInputComponent
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};

export default SearchInput;
