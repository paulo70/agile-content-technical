import { AiFillAppstore } from 'react-icons/ai';
import * as style from "./style"
import Photo from '../../assets/profile.jpeg';
import Input from '../Input';
import { useContext } from 'react';
import { SearchContext } from '../../Context/Search/ContextSearch';
import { useLocation } from 'react-router-dom';

import Google from '../../assets/google.svg'

const MainHeader = () => {
  const { search, setSearch } = useContext(SearchContext);
  const location = useLocation();
  const isResultsPage = location.pathname.includes("/results");
  
  return (
    <>
      <style.Header>
        {isResultsPage ? (
          <style.WrapperInput>
            <img src={Google} alt="Brand"/>
            <Input 
              value={search.value} 
              onChange={(e) => setSearch({ value: e.target.value })} 
            />
          </style.WrapperInput>
          
          ) : (
            <>
              <style.Title>Agile Content <style.SubTitle>Frontend test</style.SubTitle></style.Title>
              <style.Symbols>
                <style.Icon>
                  <AiFillAppstore size={18} color="#747474" />
                </style.Icon>
                <style.Profile>
                  <img src={Photo} width={20} height={20} alt="Profile" />
                </style.Profile>
              </style.Symbols>
            </>
          )}
      </style.Header>
    </>
    );
  }
      
export default MainHeader;
