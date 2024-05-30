import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Planets from "./components/planets";
import PlanetDetail from "./components/planet-detail";
import Search from "./components/search";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/planets/" element={<Planets />} />
        <Route exact  path="/planets/:id/" element={ <PlanetDetail />} />
        <Route path="/search/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}