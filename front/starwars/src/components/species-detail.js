import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Background from "./background";


const BASE_URL = "http://localhost:3001/api/";


function SpeciesDetail() {

    const params = useParams();
    let SpeciesId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {

        axios.get(`${BASE_URL}species/${SpeciesId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [SpeciesId])

    return (
        <>
            <Header />
            <Background />
            <div className="detail-container">
                <div className="detail">
                    <h1> Kind: {info.name} </h1>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Language: 
                        </div>
                        <div className="property-value">
                            {info.language}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Classification: 
                        </div>
                        <div className="property-value">
                            {info.classification}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Designation: 
                        </div>
                        <div className="property-value">
                            {info.designation}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Average height: 
                        </div>
                        <div className="property-value">
                            {info.average_height}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Skin colors: 
                        </div>
                        <div className="property-value">
                            {info.skin_colors}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Hair colors: 
                        </div>
                        <div className="property-value">
                            {info.hair_colors}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Eye colors: 
                        </div>
                        <div className="property-value">
                            {info.eye_colors}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Average lifespan: 
                        </div>
                        <div className="property-value">
                            {info.average_lifespan}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpeciesDetail;
