import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React, { useEffect, useState } from "react";
import styles from './styles.css'

const SITE_URL = "http://localhost:3000/";
const BASE_URL = "http://localhost:3001/api/";


function FilmDetail() {

    const params = useParams();
    let filmId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {
        axios.get(`${BASE_URL}films/${filmId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [filmId])


    return (
        <>
            <Header />
            <div className="detail-container">
                <div className="detail">
                    Film: {info.title} <br />
                    Episode: {info.episode_id} <br />
                    Director: {info.director} <br />
                    Producer: {info.producer} <br />
                    Release date: {info.release_date} <br />
                    Opening crawl: {info.opening_crawl} <br />
                    {
                        characterDetail(info)
                    }


                </div>
            </div>
        </>
    )
}


function characterDetail(info) {
    if (info.characters){
        return info.characters.map((character) => {
            return (    
                <div className="character">
                    <Link className="character-text" to={`/people/${character.slice(29)}`}>{`${SITE_URL}people/${character.slice(29)}`}</Link>
                </div>
            )
        })
    } else return <div>No character found</div>
}


export default FilmDetail;
