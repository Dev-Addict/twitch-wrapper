import React, {Component} from "react";
import {Link} from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
import '../style/components/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Link to="/">
                    <div className="header-logo"/>
                </Link>
                <div className="header-menu">
                    <Link to="/">
                        <div className="header-streams header-button">Streams</div>
                    </Link>
                    <GoogleAuth className="header-google-auth header-button"/>
                </div>
            </div>
        );
    }
}

export default Header;