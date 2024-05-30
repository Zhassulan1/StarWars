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
            <Header></Header>
            </>
        )
    }
}

export default Home;