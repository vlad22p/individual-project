import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export class Header extends React.Component {
    render() {
        return (
            <div className="headerMainContainer">
                <div className="headerBackground"></div>
                <div className="headerContent">
                    <div className="headerLogo">
                        <Link to="/">
                            <button className="headerButton">Homepage</button>
                        </Link>
                    </div>
                    <div className="headerButtonsContainer">
                        <Link to="/CV">
                            <button className="headerButton">My CV</button>
                        </Link>
                        <Link to="/ShowOff">
                            <button className="headerButton">Show Off</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}