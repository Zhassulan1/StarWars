import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import Background from "./background";


const BASE_URL = "http://localhost:3001/api/";

class Vehicles extends React.Component {  
    constructor(props) {
        super(props)

        Promise.all([
            axios.get(`${BASE_URL}vehicles/page/1`),
            axios.get(`${BASE_URL}vehicles/page/2`),
            axios.get(`${BASE_URL}vehicles/page/3`),
            axios.get(`${BASE_URL}vehicles/page/4`),
        ]).then(([vehicles1, vehicles2, vehicles3, vehicles4]) => {
            this.setState({
                vehicles: [
                    ...vehicles1.data.results, 
                    ...vehicles2.data.results,
                    ...vehicles3.data.results,
                    ...vehicles4.data.results, 
                ]
            })
            console.log(this.state.vehicles)
        })
        
        this.state = {
            vehicles: []
        }

    }

    render() {

        console.log(this.state.vehicles)              
        return (
            <>
                <Header />
                <Background />
                <ul className="list">
                    {
                        this.state.vehicles.map((vehicle) => {
                            return (
                                <li key={vehicle.url} className="item">
                                    <Link className="item-text" to={`/vehicles/${vehicle.url.slice(31)}`}>{vehicle.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Vehicles;

