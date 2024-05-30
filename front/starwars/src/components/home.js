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
                This is site about Star Wars. Here you can find information about planets in Star Wars universe.
            </>
        )
    }
}

export default Home;