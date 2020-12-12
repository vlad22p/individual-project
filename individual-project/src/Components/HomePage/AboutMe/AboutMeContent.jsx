import React from "react";
import galleryImages from "../Gallery/Gallery";
import galleryImagesTags from "../Gallery/Gallery";
import { Gallery } from "../Gallery/Gallery";
import "./AboutMeContent.css";

export class AboutMeContent extends React.Component {
    render() {
        if (this.props.displayedContent === "aboutMe") {
            return (
                <div className="descriptionDiv">
                    <p>Customer support representative with a high desire to learn. Interested in Web development, I am motivated to invest time in learning about web applications and the tools that are used to build them. I have started to acquire basic knowledge about HTML, CSS, Javascript and the way they interact by attending to courses, watching online tutorials, reading documentation and creating small web applications.</p>
                    <p>I am eager to deepen my knowledge as I consider a career in this field.</p>
                </div>
            )
        } else if (this.props.displayedContent === "myHobbies") {
            return (
                <div className="descriptionDiv">
                    <p>I am eager to deepen my knowledge as I consider a career in this field.</p>
                    <p>Customer support representative with a high desire to learn. Interested in Web development, I am motivated to invest time in learning about web applications and the tools that are used to build them. I have started to acquire basic knowledge about HTML, CSS, Javascript and the way they interact by attending to courses, watching online tutorials, reading documentation and creating small web applications.</p>
                </div>
            )
        } else if (this.props.displayedContent === "photos") {
            return (
                <Gallery></Gallery>
            )
        }
    }
}