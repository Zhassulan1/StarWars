import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "./header";
import Background from "./background";
import PersonName from "./person-name";
import {BASE_URL} from "./base_url"

function FilmDetail() {

    const params = useParams();
    let filmId = params.id;

    const [info, setInfo] = useState({})
    useEffect(() => {
        axios.get(`${BASE_URL}films/${filmId}/`).then((res) => {
            setInfo(res.data)
        })
    }, [filmId])

    console.log(info)
    return (
        <div className="home-main">
            <Header />
            <Background />

            <div className="detail-container">
                <div className="detail left-align">
                    <h1 > Film: {info.title} </h1>                        
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Episode: 
                        </div>
                        <div className="property-value">
                            {info.episode_id}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Director: 
                        </div>
                        <div className="property-value">
                            {info.director}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Producer: 
                        </div>
                        <div className="property-value">
                            {info.producer}
                        </div>
                    </div>
                    <div className="details-property-paragraph">
                        <div className="property-name">
                            Release date: 
                        </div>
                        <div className="property-value">
                            {info.release_date}
                        </div>
                    </div>
                    
                    {getName(info.characters)}
                    
                </div>
                    
                <div className="fade"></div>
                <section className="star-wars right-align"> 
                    <div className="crawl">
                        Opening crawl: {info.opening_crawl} <br />
                    </div>
                </section>


            </div>
        </div>
    )
}


function getName(characters) {
    if (characters) {
        return characters.map((character) => {
            return (
                <PersonName character={character}/>
            )   
           
        })
    } else {
        return (<div className="character"> No character found </div>) 
    }
}


export default FilmDetail;
