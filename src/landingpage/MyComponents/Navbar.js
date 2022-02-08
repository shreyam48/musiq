import React from "react";
import logo from "../../Images/logo.png"
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg " id="navbar">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">HOME <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#premium">PREMIUM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#support">SUPPORT</a>
                            </li>
                        </ul>
                        <Link to='/login'>
                            <button className="btn-style" type="button">LOGIN</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar