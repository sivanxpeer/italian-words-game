import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./NavBar.css";


//TODO - redirect to homepage after logout
//TODO - remember user last score and display his name when login again 

const NavBar = ({ setMyUser, myUser }) => {

    const responseGoogle = (response) => {
        setMyUser(response.profileObj);
    };

    const responseGoogle2 = (response) => {
        return response.profileObj.name;
    };

    const onLogOutSuccess = () => {
        setMyUser(null);
    };

    const onFailure = function (error) {
        console.log(error);
    };

    return (
        <nav
            id="navbar-container"
            data-visible="false"
            className="navbar-container"
        >
            <Link to="/" className="globus">
                🌏 <span className="link bi">BiLinguale</span>
            </Link>
            {myUser ? (
                <>
                    <Link to="/gamecard" className="link learn">
                        Learn Italian!
                    </Link>
                    <Link to="/user" className="link user">
                        User Profile
                    </Link>
                    <GoogleLogout
                        render={(renderProps) => (
                            <button
                                className="nav-signout link"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                Sign Out
                            </button>
                        )}
                        clientId="910294832444-nah1pvsh5jj8q9saocioacufr61c6out.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={onLogOutSuccess}
                        onFailure={onFailure}
                        isSignedIn={true}
                    />
                </>
            ) : (
                <GoogleLogin
                    className="login link"
                    clientId="910294832444-nah1pvsh5jj8q9saocioacufr61c6out.apps.googleusercontent.com"
                    buttonText="Login"
                    name={responseGoogle2}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
            )}
        </nav>

    );
};

export default NavBar;