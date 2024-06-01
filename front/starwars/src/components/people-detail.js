import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useEffect, useState } from "react";
import Background from "./background";

const BASE_URL = "http://localhost:3001/api/";


function PeopleDetail() {

    const params = useParams();
    let peopleId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {
        axios.get(`${BASE_URL}people/${peopleId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [peopleId])

    return (
        <>
            <Header />
            <Background />
            <div className="detail-container">
                <div className="detail">
                    <h1> Person: {info.name} </h1>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Height (cm): 
                        </div>
                        <div className="property-value">
                            {info.height}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Mass: 
                        </div>
                        <div className="property-value">
                            {info.mass}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Hair color: 
                        </div>
                        <div className="property-value">
                            {info.hair_color}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Skin color: 
                        </div>
                        <div className="property-value">
                            {info.skin_color}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Eye color: 
                        </div>
                        <div className="property-value">
                            {info.eye_color}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Birth year: 
                        </div>
                        <div className="property-value">
                            {info.birth_year}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Gender: 
                        </div>
                        <div className="property-value">
                            {info.gender}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default PeopleDetail;
