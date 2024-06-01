import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Background from "./background";
import {BASE_URL} from "./base_url"


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
            <Background />
            <div className="detail-container">
                <div className="detail">
                    <h1> Planet: {info.name} </h1>

                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Rotation period (hours): 
                        </div>
                        <div className="property-value">
                            {info.rotation_period} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Orbital period (days): 
                        </div>
                        <div className="property-value">
                            {info.orbital_period} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Diameter (meters): 
                        </div>
                        <div className="property-value">
                            {info.diameter} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Climate: 
                        </div>
                        <div className="property-value">
                            {info.climate} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Gravity: 
                        </div>
                        <div className="property-value">
                            {info.gravity} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Terrain: 
                        </div>
                        <div className="property-value">
                            {info.terrain} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Surface covered with water or ice (%): 
                        </div>
                        <div className="property-value">
                            {info.surface_water} 
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Population: 
                        </div>
                        <div className="property-value">
                            {info.population} 
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PlanetDetail;
