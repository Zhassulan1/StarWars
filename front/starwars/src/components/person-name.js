import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {BASE_URL} from "./base_url"


function PersonName({character}) {
    const [info, setInfo] = useState({})
    
    let id = character.slice(29)
    
    useEffect(() => {
        axios.get(`${BASE_URL}people/${id}`).then((res) => {
            setInfo(res.data)
        })
    }, [id])
    
    let name = info.name
    return (    
        <Link className="" to={`/people/${id}`}>
            <li className="item">
                {name}
            </li>
        </Link>
    )
   
}

export default PersonName