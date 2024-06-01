import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

import Header from "./header";
import Background from "./background";


const BASE_URL = "http://localhost:3001/api/";

class Planets extends React.Component {  
    constructor(props) {
        super(props)

        Promise.all([
            axios.get(`${BASE_URL}planets/page/1`),
            axios.get(`${BASE_URL}planets/page/2`),
            axios.get(`${BASE_URL}planets/page/3`),
            axios.get(`${BASE_URL}planets/page/4`),
            axios.get(`${BASE_URL}planets/page/5`),
            axios.get(`${BASE_URL}planets/page/6`),
        ]).then(([planets1, planets2, planets3, planets4, planets5, planets6]) => {
            this.setState({
                planets: [
                    ...planets1.data.results, 
                    ...planets2.data.results,
                    ...planets3.data.results,
                    ...planets4.data.results, 
                    ...planets5.data.results, 
                    ...planets6.data.results
                ]
            })
            console.log(this.state.planets)
        })
        
        this.state = {
            planets: []
        }

    }

    render() {

        console.log(this.state.planets)              
        return (
            <>
                <Header />
                <Background />
                
                <ul className="list">
                    {
                        this.state.planets.map((planet) => {
                            return (
                                <Link className="item-text" to={`/planets/${planet.url.slice(30)}`}>
                                    <li key={planet.url} className="item">
                                        {planet.name}
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Planets;

