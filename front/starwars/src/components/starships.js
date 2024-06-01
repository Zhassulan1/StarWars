import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

import Header from "./header";
import Background from "./background";


const BASE_URL = "http://localhost:3001/api/";

class starships extends React.Component {  
    constructor(props) {
        super(props)

        Promise.all([
            axios.get(`${BASE_URL}starships/page/1`),
            axios.get(`${BASE_URL}starships/page/2`),
            axios.get(`${BASE_URL}starships/page/3`),
            axios.get(`${BASE_URL}starships/page/4`),
        ]).then(([starships1, starships2, starships3, starships4]) => {
            this.setState({
                starships: [
                    ...starships1.data.results, 
                    ...starships2.data.results,
                    ...starships3.data.results,
                    ...starships4.data.results, 
                ]
            })
            console.log(this.state.starships)
        })
        
        this.state = {
            starships: []
        }

    }

    render() {

        console.log(this.state.starships)              
        return (
            <>
                <Header />
                <Background />
                <ul className="list">
                    {
                        this.state.starships.map((starship) => {
                            return (
                                <li key={starship.url} className="item">
                                    <Link className="item-text" to={`/starships/${starship.url.slice(32)}`}>{starship.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default starships;

