import { Link } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React from "react";
import styles from './styles.css'


const BASE_URL = "http://localhost:3001/api/";

class People extends React.Component {  
    constructor(props) {
        super(props)

        Promise.all([
            axios.get(`${BASE_URL}people/page/1`),
            axios.get(`${BASE_URL}people/page/2`),
            axios.get(`${BASE_URL}people/page/3`),
            axios.get(`${BASE_URL}people/page/4`),
            axios.get(`${BASE_URL}people/page/5`),
            axios.get(`${BASE_URL}people/page/6`),
            axios.get(`${BASE_URL}people/page/7`),
            axios.get(`${BASE_URL}people/page/8`),
            axios.get(`${BASE_URL}people/page/9`),
        ]).then(([people1, people2, people3, people4, people5, people6, people7, people8, people9]) => {
            this.setState({
                people: [
                    ...people1.data.results, 
                    ...people2.data.results,
                    ...people3.data.results,
                    ...people4.data.results, 
                    ...people5.data.results, 
                    ...people6.data.results,
                    ...people7.data.results,
                    ...people8.data.results,
                    ...people9.data.results
                ]
            })
            console.log(this.state.people)
        })
        
        this.state = {
            people: []
        }

    }

    render() {

        console.log(this.state.people)              
        return (
            <>
                <Header />

                <ul className="list">
                    {
                        this.state.people.map((person) => {
                            return (
                                <li key={person.url} className="item">
                                    <Link className="item-text" to={`/people/${person.url.slice(29)}`}>{person.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default People;

