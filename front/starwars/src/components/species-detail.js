import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useEffect, useState } from "react";
import styles from './styles.css'


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

    // console.log(info)
    return (
        <>
            <Header />
            <div className="detail-container">
                <div className="detail">
                    Kind: {info.name} <br />
                    Language: {info.language} <br />
                    Classification: {info.classification} <br />
                    Designation: {info.designation} <br />
                    Average height: {info.average_height} <br />
                    Skin colors: {info.skin_colors} <br />
                    Hair colors: {info.hair_colors} <br />
                    Eye colors: {info.eye_colors} <br />
                    Average lifespan: {info.average_lifespan} <br />
                </div>
            </div>
        </>
    )
}

export default SpeciesDetail;
