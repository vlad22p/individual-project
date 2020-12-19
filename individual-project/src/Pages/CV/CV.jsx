import React from "react";
import "./CV.css";
import profile from "../../Images/profile.jpg";
import { Section } from "./components/cvComponents";
import { CvMain } from "./components/cvComponents";
import { CvAside } from "./components/cvComponents";

export class CV extends React.Component {
    render() {
        return (
            <div id="cvMainContainer">
                <header id="cvHeader">
                    <img src={profile} id="cvImage" alt="Profile image"></img>
                    <div id="cvHeaderInfo">
                        <h1>Pop Vlad George</h1>
                        <h2>23 years</h2>
                    </div>
                </header>
                <div id="cvContent">
                    <CvAside></CvAside>
                    <CvMain></CvMain>
                </div>
            </div>
        )
    }
}

