import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useEffect, useState } from "react";
import styles from './styles.css'


const BASE_URL = "http://localhost:3001/api/";


function PlanetDetail() {

    const params = useParams();
    let planetId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {

        axios.get(`${BASE_URL}planets/${planetId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [planetId])

    // console.log(info)
    return (
        <>
            <Header />
            <div className="detail-container">
                <div className="detail">
                    Planet: {info.name} <br />
                    Rotation period (hours): {info.rotation_period} <br />
                    Orbital period (days): {info.orbital_period} <br />
                    Diameter (meters): {info.diameter} <br />
                    Climate: {info.climate} <br />
                    Gravity: {info.gravity} <br />
                    Terrain: {info.terrain} <br />
                    Surface covered with water or ice (%): {info.surface_water} <br />
                    Population: {info.population} <br />

                </div>
            </div>
        </>
    )
}

export default PlanetDetail;
