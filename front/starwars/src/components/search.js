import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import Header from "./header";
import Background from "./background";


const BASE_URL = "http://localhost:3001/api/";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    let query = searchParams.get("query")

    const [people, setPeople] = useState([])
    const [films, setFilms] = useState([])
    const [starships, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [species, setSpecies] = useState([])
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}people/search/${query}/`).then((response) => {
            if (response.data.results.length) {   
                setPeople(response.data.results)
            }
        })
        
        axios.get(`${BASE_URL}films/search/${query}/`).then((response) => {
            if (response.data.results.length) {   
                setFilms(response.data.results)
            }
        })
        
        axios.get(`${BASE_URL}starships/search/${query}/`).then((response) => {
            if (response.data.results.length) {   
                setStarships(response.data.results)
            }
        })
        
        axios.get(`${BASE_URL}vehicles/search/${query}/`).then((response) => {
            if (response.data.results.length) {   
                setVehicles(response.data.results)
            }
        })
        
        axios.get(`${BASE_URL}species/search/${query}/`).then((response) => {
            if (response.data.results.length) {   
                setSpecies(response.data.results)
            }
        })

        axios.get(`${BASE_URL}planets/search/${query}/`).then((response) => {
            if (response.data.results.length) {   
                setPlanets(response.data.results)
            }
        })
    }, [query])

    console.log("people:", people)
    console.log("films:", films)
    console.log("starships:", starships)
    console.log("vehicles:", vehicles)
    console.log("species:", species)
    console.log("planets:", planets)


    return (
        <>
            <Header />
            <Background />
            
            <div className="search-detail">
                <h2>Search Results</h2>
                <div className="links-container">
                    <h3 className="links-title"> People: <br /> </h3>
                    <ul className="search-list">
                        {construct(people, "people", 29, "name")}
                    </ul>

                    <h3 className="links-title"> Films: <br /> </h3>
                    <ul className="search-list">
                        {construct(films, "films", 28, "title")}
                    </ul>

                    <h3 className="links-title"> Starships: <br /> </h3>
                    <ul className="search-list">
                        {construct(starships, "starships", 32, "name")}
                    </ul>
                    
                    <h3 className="links-title"> Vehicles: <br /> </h3>
                    <ul className="search-list">
                        {construct(vehicles, "vehicles", 31, "name")}
                    </ul>
                    
                    <h3 className="links-title"> Species: <br /> </h3>
                    <ul className="search-list">
                        {construct(species, "species", 30, "name")}
                    </ul>
                    
                    <h3 className="links-title"> Planets: <br /> </h3>
                    <ul className="search-list">
                        { construct(planets, "planets", 30, "name") }
                    </ul>
                        
                </div>
            </div>
        </>
    )
}

function construct(arr, itemName, sliceLen, nameKey) {
    if (arr.length) {
        return arr.map((item) => {
            return (
                <li className="search-item">
                    <Link className="search-item-text" to={`/${itemName}/${item.url.slice(sliceLen)}`}>{item[nameKey]}</Link>
                </li>
            )
        })
    } else return <div>No {itemName} found</div>

}

export default Search;