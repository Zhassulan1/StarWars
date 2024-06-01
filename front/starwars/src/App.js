import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./components/home";
import People from "./components/people";
import Films from "./components/films";
import Starships from "./components/starships";
import Vehicles from "./components/vehicles";
import Species from "./components/species";
import Planets from "./components/planets";

import PeopleDetail from "./components/people-detail";
import FilmsDetail from "./components/films-detail";
import StarshipDetail from "./components/staships-detail";
import VehicleDetail from "./components/vehicles-detail";
import SpeciesDetail from "./components/species-detail";
import PlanetDetail from "./components/planet-detail";

import Search from "./components/search";
import './App.css';
import './styles/main.css'
import './styles/home.css'
import './styles/background-stars.css'
import './styles/header.css'
import './styles/item.css'
import './styles/search.css'
import './styles/details.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/people/" element={<People />} />
        <Route path="/films/" element={<Films />} />
        <Route path="/starships/" element={<Starships />} />
        <Route path="/vehicles/" element={<Vehicles />} />
        <Route path="/species/" element={<Species />} />
        <Route path="/planets/" element={<Planets />} />

        <Route exact  path="/people/:id/" element={ <PeopleDetail />} />
        <Route exact  path="/films/:id/" element={ <FilmsDetail />} />
        <Route exact  path="/starships/:id/" element={ <StarshipDetail />} />
        <Route exact  path="/vehicles/:id/" element={ <VehicleDetail />} />
        <Route exact  path="/species/:id/" element={ <SpeciesDetail />} />
        <Route exact  path="/planets/:id/" element={ <PlanetDetail />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />

        <Route path="/search/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}