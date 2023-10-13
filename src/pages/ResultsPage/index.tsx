import { useParams } from "react-router-dom";
import data from "../../services/faker";
import { useState, useEffect, useContext } from "react";
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
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    description: string;
    image: string;
    url: string;
  } | null>(null);

  const handleGetItem = (item: SearchResultItem) => {
    setSelectedItem({
      title: item.title,
      description: item.description,
      image: item.image,
      url: item.url,
    });
  };

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return (
        searchTerm &&
        item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.title.toLowerCase().includes(search.value.toLowerCase())
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
            <li key={item.id} onClick={() => handleGetItem(item)}>
              <a href="">{item.url}</a>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      {selectedItem && (
        <ItemDetails>
          <img src={selectedItem.image} alt="Imagem" />
          <a href="#">{selectedItem.url}</a>
          <h3>{selectedItem.title}</h3>
          <p>{selectedItem.description}</p>
        </ItemDetails>
      )}
    </Container>
  );
};

export default SearchResults;
