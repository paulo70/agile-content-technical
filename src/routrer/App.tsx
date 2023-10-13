import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import SearchResults from "../pages/ResultsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="results/:searchTerm" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
