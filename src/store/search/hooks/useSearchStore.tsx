import { create } from "zustand";

import { SearchState } from "..";

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));

export default useSearchStore;
