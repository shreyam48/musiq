import React, { Component } from "react"
import Sidebar from "../Sidebar/Sidebar"
import Topbar from "../Topbar/Topbar"
import "./artistDetails.css"
import { artistSongs } from "./artistSongs"
import { IoPlayCircle } from 'react-icons/io5'
import { FcMusic } from "react-icons/fc"

class ArtistDetails extends Component {
    state = {
        text: "FOLLOW",
        color: "rgb(134, 180, 180)",
    }
    changeText = (text) => {
        this.setState({ text });
    }
    render() {
        const { text } = this.state
        return (
            <div className="container-fluid ">

                <div className="row h-100">
                    <div className="col-2" style={{ padding: 0 }}>
                        <div className="sticky-top">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="col-10 h-100 play-nav" style={{ padding: 0 }}>
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <Topbar />
                        </nav>
                        <div className="artist-details">
                            <div className="a-header">
                                <div className="name-singer">Taylor Swift</div>
                                <img className="circle-img" src='./musicimages/music14.jpg' alt="singer img" />
                                <button className="follow-btn" onClick={() => { this.changeText("FOLLOWING") }}><h3>{text}</h3></button>
                                <button className="play-1" >
                                    <IoPlayCircle className="play-pause" />
                                </button>
                            </div>

                            <div className="a-body">
                                <div className="heading">POPULAR <FcMusic className="music-icon" /></div>
                                {artistSongs.map((taylor, key) =>
                                    <div key={key}
                                        className=" row">
                                        <div className="col-3 taylor-list">

                                            <div className="taylor-index">
                                                {taylor.index}</div>

                                            <img className="taylor-img" src={taylor.img} alt="song-img" />
                                            <div className="taylor-name">{taylor.name}</div>
                                        </div>
                                        <div className="col-3 taylor-specs">
                                            <span className="t-down">{taylor.downloads}</span>
                                        </div>
                                        <div className="col-3 taylor-specs">
                                            <span className="t-down">{taylor.duration}</span>
                                        </div>
                                        <span className="t-icon1">{taylor.icon1}</span>
                                        <span className="t-icon2">{taylor.icon2}</span>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}
export default ArtistDetails