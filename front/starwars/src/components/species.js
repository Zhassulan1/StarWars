import { Link } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React from "react";
import styles from './styles.css'


const BASE_URL = "http://localhost:3001/api/";

class species extends React.Component {  
    constructor(props) {
        super(props)

        Promise.all([
            axios.get(`${BASE_URL}species/page/1`),
            axios.get(`${BASE_URL}species/page/2`),
            axios.get(`${BASE_URL}species/page/3`),
            axios.get(`${BASE_URL}species/page/4`),
        ]).then(([species1, species2, species3, species4]) => {
            this.setState({
                species: [
                    ...species1.data.results, 
                    ...species2.data.results,
                    ...species3.data.results,
                    ...species4.data.results, 
                ]
            })
            console.log(this.state.species)
        })
        
        this.state = {
            species: []
        }

    }

    render() {

        console.log(this.state.species)              
        return (
            <>
                <Header />

                <ul className="list">
                    {
                        this.state.species.map((kind) => {
                            return (
                                <li key={kind.url} className="item">
                                    <Link className="item-text" to={`/species/${kind.url.slice(30)}`}>{kind.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default species;
