import { Outlet, Link } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React from "react";
import styles from './home.css'


const BASE_URL = "https://swapi.dev/api/";

class Planets extends React.Component {  
    constructor(props) {
        super(props)
        for (let i = 0; i < 6; i++) {
            axios.get(`${BASE_URL}planets?page=${i+1}`).then((res) => {
                this.setState({
                    planets: [...this.state.planets, ...res.data.results]
                })
                console.log(this.state.planets)  
            })
        }
        
        this.state = {
            planets: []
        }

    }

    render() {

        console.log(this.state.planets)              
        return (
            <>
                <Header />

                <ul className="list">
                    {
                        this.state.planets.map((planet) => {
                            return (
                                <li key={planet.url} className="item">
                                    <Link className="item-text" to={`/planets/${planet.url.slice(30)}`}>{planet.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Planets;


// https://swapi.dev/api/planets/41/