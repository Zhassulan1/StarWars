import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useEffect, useState } from "react";
import styles from './styles.css'


const BASE_URL = "http://localhost:3001/api/";


function StarshipDetail() {

    const params = useParams();
    let starshipId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {

        axios.get(`${BASE_URL}starships/${starshipId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [starshipId])

    return (
        <>
            <Header />
            <div className="detail-container">
                <div className="detail">
                    Starship: {info.name} <br />
                    Model: {info.model} <br />
                    Manufacturer: {info.manufacturer} <br />
                    Cost in credits: {info.cost_in_credits} <br />
                    Length: {info.length} <br />
                    Max atmosphering speed: {info.max_atmosphering_speed} <br />
                    Crew: {info.crew} <br />
                    Passengers: {info.passengers} <br />
                    Cargo capacity: {info.cargo_capacity} <br />
                    Consumables: {info.consumables} <br />
                    Hyperdrive rating: {info.hyperdrive_rating} <br />
                    MGLT: {info.MGLT} <br />
                    Starship class: {info.starship_class} <br />

                </div>
            </div>
        </>
    )
}

export default StarshipDetail;
