import { 
  ReactNode, 
  createContext, 
  useState, 
  Dispatch, 
  SetStateAction 
} from "react";

type Search = {
  value: string;
}

interface SearchProps {
  children: ReactNode;
}

export const SearchContext = createContext<{
  search: Search;
  setSearch: Dispatch<SetStateAction<Search>>;
}>({
  search: { value: '' },
  setSearch: () => {}
});

const SearchContextProvider = ({ children }: SearchProps) => {
  const [search, setSearch] = useState<Search>({ value: '' });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
