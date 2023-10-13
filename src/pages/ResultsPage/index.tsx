import { useParams } from "react-router-dom";
import data from "../../services/faker";
import { useState, useEffect, useContext} from "react";
import { SearchContext } from "../../Context/Search/ContextSearch";
import { Container, ItemDetails } from "./style";

interface SearchResultItem {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
}

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { search } = useContext(SearchContext);
  const [filterData, setFilterData] = useState<SearchResultItem[]>([]);
  const [isItemDetailsFixed, setIsItemDetailsFixed] = useState(true);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    description: string;
    image: string;
    url: string;
  } | null>(null);


  const handleGetItem = (item: SearchResultItem) => {
    setSelectedItem(item);
    if (window.innerWidth <= 768) {
      setIsItemDetailsFixed(false);
    }
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return (
        searchTerm &&
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    setFilterData(filteredData);
  }, [searchTerm, search.value]);

  return (
    <Container>
      {searchTerm && filterData.length === 0 ? (
        <p>No results found for {search.value}</p>
      ) : searchTerm === undefined ? (
        <p>No search term used.</p>
      ) : (
        <ul>
          {filterData.map((item) => (
            <li 
              key={item.id} 
              onClick={() => {handleGetItem(item)}}
              >
              <a href="">{item.url}</a>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      {selectedItem && (
        <ItemDetails className={isItemDetailsFixed ? "fixed" : "absolute"}>
          <img src={selectedItem.image} alt="Images from animals" />
          <a href="#">{selectedItem.url}</a>
          <h3>{selectedItem.title}</h3>
          <p>{selectedItem.description}</p>
        </ItemDetails>
      )}
    </Container>
  );
};

export default SearchResults;
