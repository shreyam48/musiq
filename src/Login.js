import React from "react";
import "./Login.css"
import singer from "./Images/singer.png";
import Navbar from './landingpage/MyComponents/Navbar'
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email is required.";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Please enter a valid email.";
            }
        }

        // Password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Password is required.";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.history.push('/musicplayer');
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className="login-page">
                <div className="log-nav">
                    <Navbar />
                </div>
                <div className="singer" href="#"><img className="singer2" src={singer} alt="singer..." /></div>
                <div className="Login">

                    <div class="container">

                        <form name="contactform" onSubmit={this.contactSubmit.bind(this)}>

                            <p class="heading-login">Log In</p>

                            <div className="form-group w-100 form-e" >
                                <input refs="email" type="text" placeholder="Email" className="form-control" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                <span className="errors">{this.state.errors["email"]}</span>
                            </div>

                            <div className="form-group w-100 form-p">
                                <input refs="password" type="password" placeholder="Password" className="form-control" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                                <span className="errors">{this.state.errors["password"]}</span>
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox" id="rem">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" value="signedIn" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Stay signed in</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block text-center"> LOGIN</button>

                            <p className="forgot-password">
                                <a href="#">Forgot  password?</a>
                            </p>

                        </form>
                    </div >
                </div >
            </div>
        );
    }
}

export default withRouter(Login);