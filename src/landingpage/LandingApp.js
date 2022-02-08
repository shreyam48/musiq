import React from "react";
import Navbar from "../landingpage/MyComponents/Navbar";
import Header from "../landingpage/MyComponents/Header";
import About from "../landingpage/MyComponents/About"
import Premium from "../landingpage/MyComponents/Premium"
import Support from "../landingpage/MyComponents/Support";
import Footer from "../landingpage/MyComponents/Footer";
import "./LandingApp.css";


function LandingApp() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Premium />
            <Support />
            <Footer />
        </>
    );
}

export default LandingApp;