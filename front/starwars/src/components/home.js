import { Outlet, Link } from "react-router-dom";
import axios from "axios";

import Header from "./header";
import React from "react";


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <>
                <Header />
                

                <div className="fade"></div>

                <section className="star-wars">

                <div className="crawl">

                    <div className="title">
                        <p> Here you can find information about Star Wars universe</p> <br />
                        <h1>Star Wars</h1>
                    </div>
                    
                        <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>      
                        <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
                        <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…</p>

                    </div>

                </section>
            </>
        )
    }
}

export default Home;