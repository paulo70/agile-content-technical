import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import Router from './routrer/index.tsx'

import SearchContextProvider from './Context/Search/ContextSearch.tsx'
const theme = {};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <SearchContextProvider>
      <Router />
    </SearchContextProvider>
  </ThemeProvider> 
  )
