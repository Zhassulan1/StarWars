import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useState } from "react";
import styles from './home.css'


const BASE_URL = "https://swapi.dev/api/";


function PlanetDetail() {

    const params = useParams();
    let planetId = params.id;

    const [info, setInfo] = useState({})
    axios.get(`${BASE_URL}planets/${planetId}/`).then((res) => {
        setInfo(res.data)
    })

    // console.log(info)
    return (
        <>
            <Header />
            Planet: {info.name} <br />
            Rotation period (hours): {info.rotation_period} <br />
            Orbital period (days): {info.orbital_period} <br />
            Diameter (meters): {info.diameter} <br />
            Climate: {info.climate} <br />
            Gravity: {info.gravity} <br />
            Terrain: {info.terrain} <br />
            Surface covered with water or ice (%): {info.surface_water} <br />
            Population: {info.population} <br />

        </>
    )
}

export default PlanetDetail;
