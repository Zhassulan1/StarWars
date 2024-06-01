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
            <div className="detail-container">
                <div className="detail">
                    <h2>Search Results</h2>
                    <div className="links-container">
                        <h3> People: <br /> </h3>
                        {construct(people, "people", 29, "name")}

                        <h3> Films: <br /> </h3>
                        {construct(films, "films", 28, "title")}

                        <h3> Starships: <br /> </h3>
                        {construct(starships, "starships", 32, "name")}
                        
                        <h3> Vehicles: <br /> </h3>
                        {construct(vehicles, "vehicles", 31, "name")}
                        
                        <h3> Species: <br /> </h3>
                        {
                            construct(species, "species", 30, "name")
                        }
                        <h3> Planets: <br /> </h3>
                         { construct(planets, "planets", 30, "name") }
                         
                    </div>
                </div>
            </div>
        </>
    )
}

function construct(arr, itemName, sliceLen, nameKey) {
    if (arr.length) {
        return arr.map((item) => {
            return (
                <Link className="item" to={`/${itemName}/${item.url.slice(sliceLen)}`}>{item[nameKey]}</Link>
            )
        })
    } else return <div>No {itemName} found</div>

}

export default Search;