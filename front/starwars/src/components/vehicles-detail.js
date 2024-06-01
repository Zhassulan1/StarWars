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
                    <h1> Vehicle: {info.name} </h1>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Model: 
                        </div>
                        <div className="property-value">
                            {info.model}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Manufacturer: 
                        </div>
                        <div className="property-value">
                            {info.manufacturer}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Cost in credits: 
                        </div>
                        <div className="property-value">
                            {info.cost_in_credits}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Length: 
                        </div>
                        <div className="property-value">
                            {info.length}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Max atmosphering speed: 
                        </div>
                        <div className="property-value">
                            {info.max_atmosphering_speed}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Crew: 
                        </div>
                        <div className="property-value">
                            {info.crew}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Passengers: 
                        </div>
                        <div className="property-value">
                            {info.passengers}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Cargo capacity: 
                        </div>
                        <div className="property-value">
                            {info.cargo_capacity}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Consumables: 
                        </div>
                        <div className="property-value">
                            {info.consumables}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Vehicle class: 
                        </div>
                        <div className="property-value">
                            {info.vehicle_class}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default VehicleDetail;
