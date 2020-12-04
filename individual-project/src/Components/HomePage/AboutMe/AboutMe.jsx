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
            <div className="aboutMeMainContainer">
                <div className="homePageButtonsContainer">
                    <button className="homePageButton" onClick={() => { this.setState({ displayedContent: "aboutMe" }) }}>About Me</button>
                    <button className="homePageButton" onClick={() => { this.setState({ displayedContent: "myHobbies" }) }}>My Hobbies</button>
                    <button className="homePageButton" onClick={() => { this.setState({ displayedContent: "photos" }) }}>My Photos</button>
                </div>
                <div className="aboutMeContent">
                    <AboutMeContent displayedContent={this.state.displayedContent}></AboutMeContent>
                </div>
            </div>
        )
    }
}