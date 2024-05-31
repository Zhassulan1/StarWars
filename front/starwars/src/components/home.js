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
                        
                        <p>
                            Star Wars is an American epic space opera media franchise created by George Lucas, 
                            which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture 
                            phenomenon. The franchise has been expanded into various films and other media, including
                            television series, video games, novels, comic books, theme park attractions, and themed 
                            areas, comprising an all-encompassing fictional universe.[b] Star Wars is one of the 
                            highest-grossing media franchises of all time.
                        </p>      
                        <p>
                            The original 1977 film, retroactively subtitled Episode IV: A New Hope, was followed by 
                            the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), 
                            forming the original Star Wars trilogy. Lucas later returned to the series to write and direct 
                            a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), 
                            Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). 
                            In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. 
                            This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), 
                            Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).
                        </p>
                        <p>
                            All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, 
                            with wins going to the first two releases. Together with the theatrical live action "anthology" films 
                            Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over
                            US$10 billion, making Star Wars the third-highest-grossing film franchise of all time.
                        </p>

                    </div>

                </section>
            </>
        )
    }
}

export default Home;