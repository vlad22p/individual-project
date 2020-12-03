import React from "react";
import { AboutMeContent } from "./AboutMeContent";

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
                <div className="aboutMeButtons">
                    <button onClick={() => { this.setState({ displayedContent: "aboutMe" }) }}>About Me</button>
                    <button onClick={() => { this.setState({ displayedContent: "myHobbies" }) }}>My Hobbies</button>
                    <button onClick={() => { this.setState({ displayedContent: "photos" }) }}>My Photos</button>
                </div>
                <AboutMeContent displayedContent={this.state.displayedContent}></AboutMeContent>
            </div>
        )
    }
}