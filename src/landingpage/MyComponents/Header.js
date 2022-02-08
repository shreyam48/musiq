import React from "react";
import Typed from "react-typed"
import singer from "../../Images/singer.png";
import dots from "../../Images/dots.png";
import dots2 from "../../Images/dots2.png";
import { Link } from 'react-router-dom'


export default function header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <a className="singer" href="#"><img className="singer" src={singer} alt="singer..." /></a>
                <a className="dots" href="#"><img className="dots" src={dots} alt="dots..." /></a>
                <a className="dots2" href="#"><img className="dots2" src={dots2} alt="dots2..." /></a>
                <h1 className="quote">Live<br /> for the</h1>
                <Typed
                    className="typed-text"
                    strings={["MUSIC.", "GROOVE."]}
                    typeSpeed={120}
                    backSpeed={90}
                    loop
                />
                <Link to='/musicplayer'>
                    <button className="btn1-style" type="button">open music player</button>
                </Link>
            </div>


        </div>


    )
}