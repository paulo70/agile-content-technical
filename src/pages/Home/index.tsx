import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container } from "./style";
import Google from '../../assets/google.svg'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/results/${searchTerm}`);
  };
  return(
    <Container>
      <img src={Google} alt="brand" />
      <Input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button 
        name="Buscar" 
        onClick={handleSearch}
        disabled={searchTerm === ''}
      />
    </Container> 
    )
  }
  
  export default HomePage