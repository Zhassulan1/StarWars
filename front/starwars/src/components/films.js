import { Link } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React from "react";
import styles from './styles.css'


const BASE_URL = "http://localhost:3001/api/";

class Films extends React.Component {  
    constructor(props) {
        super(props)

        Promise.all([
            axios.get(`${BASE_URL}films/page/1`),
        ]).then(([films1]) => {
            this.setState({
                films: [...films1.data.results]
            })
            console.log(this.state.films)
        })
        
        this.state = {
            films: []
        }

    }

    render() {

        console.log(this.state.films)              
        return (
            <>
                <Header />

                <ul className="list">
                    {
                        this.state.films.map((film) => {
                            return (
                                <li key={film.url} className="item">
                                    <Link className="item-text" to={`/films/${film.url.slice(28)}`}>{film.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Films;

