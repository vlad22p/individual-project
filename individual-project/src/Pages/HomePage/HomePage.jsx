import React from "react";
import "./HomePage.css";
import { AboutMe } from "../../Components/HomePage/AboutMe/AboutMe";
import profile from "./profile.jpg";

export class HomePage extends React.Component {
    render() {
        return (
            <div className="homePageMainContainer">
                <div className="homePageLeftContainer">
                    <img className="profileImage" src={profile}></img>
                </div>
                <div className="homePageRightContainer">
                    <AboutMe></AboutMe>
                </div>
            </div>
        )
    }
}

