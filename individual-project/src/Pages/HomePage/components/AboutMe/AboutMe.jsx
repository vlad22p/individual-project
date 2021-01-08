import React from "react";
import { AboutMeContent } from "./AboutMeContent";
import "./AboutMe.css";

export class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {
            displayedContent: "aboutMe"
        }
    }

    render() {
        return (
            <div className="about-me-main-container">
                <div className="homepage-buttons-container">
                    <button className="homepage-button" onClick={() => { this.setState({ displayedContent: "aboutMe" }) }}>About Me</button>
                    <button className="homepage-button" onClick={() => { this.setState({ displayedContent: "myHobbies" }) }}>My Hobbies</button>
                    <button className="homepage-button" onClick={() => { this.setState({ displayedContent: "photos" }) }}>My Photos</button>
                </div>
                <div className="about-me-content">
                    <AboutMeContent displayedContent={this.state.displayedContent}></AboutMeContent>
                </div>
            </div>
        )
    }
}