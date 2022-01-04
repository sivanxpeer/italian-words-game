import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import './NavBar.css';

const NavBar = () => {
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }
    return (
        <nav id="navbar-container" data-visible="false" className="navbar-container">
            <Link to="/" className="globus">🌏 <span className="link bi">BiLinguale</span></Link>
            {/* <Link to="/" className="link bi">BiLinguale</Link> */}
            <Link to="/gamecard" className="link learn">Learn Italian!</Link>
            <Link to="/user" className="link user">User Profile</Link>
            <GoogleLogin className="login link"
                clientId="910294832444-nah1pvsh5jj8q9saocioacufr61c6out.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}

            ></GoogleLogin>
        </nav>
    );
};

export default NavBar;
