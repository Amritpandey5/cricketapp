import React from "react";
import Nav from "../navbar/Nav";
import Event from "../Event/Event";
import Main from "../MainSection/main";
import './Home.css'

const Home = () =>{
    return(
        <>
        <Nav/>
        <Event/>
        <Main/>
        </>
    )
}

export default Home;