import React from "react";
import "./HomePage.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import profile from "../../Images/profile.jpg";

export class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-main-container">
                <div className="homepage-left-container">
                    <img className="profile-image" src={profile}></img>
                </div>
                <div className="homepage-right-container">
                    <AboutMe></AboutMe>
                </div>
            </div>
        )
    }
}

