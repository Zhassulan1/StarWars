import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useEffect, useState } from "react";
import styles from './styles.css'


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

    // console.log(info)
    return (
        <>
            <Header />
            <div className="detail-container">
                <div className="detail">
                    Person: {info.name} <br />
                    Height (cm): {info.height} <br />
                    Mass: {info.mass} <br />
                    Hair color: {info.hair_color} <br />
                    Skin color: {info.skin_color} <br />
                    Eye color: {info.eye_color} <br />
                    Birth year: {info.birth_year} <br />
                    Gender: {info.gender} <br />
                </div>
            </div>
        </>
    )
}



export default PeopleDetail;
