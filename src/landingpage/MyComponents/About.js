//About.js
import React from 'react'
import one from "../../Images/one.png";
import two from "../../Images/two.png";
import three from "../../Images/three.png";
import four from "../../Images/four.png";

export default function About() {
    return (
        <div className="about-page" id="about">
            <div className="why py-4">
                <h2>Why musiq?</h2>
            </div>

            <div className="row">
                <div className="col-3 card text-center ">
                    <img className=" card-img-top" src={one} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Play your favourites.</h5>
                        <p className="card-text">Listen to the songs you love, and discover new music and podcasts.</p>
                    </div>
                </div>
                <div className="col-3 card text-center">
                    <img className=" card-img-top" src={two} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Playlists made easy.</h5>
                        <p className="card-text">We'll help you make playlists. Or enjoy playlists made by music experts.</p>
                    </div>
                </div>
                <div className="col-3 card text-center">
                    <img className=" card-img-top" src={three} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Make it yours.</h5>
                        <p className="card-text">Tell us what you like, and we'll recommend music for you.</p>
                    </div>
                </div>
                <div className="col-3 card text-center">
                    <img className=" card-img-top" src={four} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Save mobile data.</h5>
                        <p className="card-text">To use less data when you play music, turn on Data Saver in Settings.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}