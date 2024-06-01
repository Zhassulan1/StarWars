import React, { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import Background from "./background";

const BASE_URL = "http://localhost:3001/api/";


function VehicleDetail() {

    const params = useParams();
    let vehicleId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {

        axios.get(`${BASE_URL}vehicles/${vehicleId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [vehicleId])

    return (
        <>
            <Header />
            <Background />
            <div className="detail-container">
                <div className="detail">
                    Vehicle: {info.name} <br />
                    Model: {info.model} <br />
                    Manufacturer: {info.manufacturer} <br />
                    Cost in credits: {info.cost_in_credits} <br />
                    Length: {info.length} <br />
                    Max atmosphering speed: {info.max_atmosphering_speed} <br />
                    Crew: {info.crew} <br />
                    Passengers: {info.passengers} <br />
                    Cargo capacity: {info.cargo_capacity} <br />
                    Consumables: {info.consumables} <br />
                    Vehicle class: {info.vehicle_class} <br />

                </div>
            </div>
        </>
    )
}


export default VehicleDetail;
