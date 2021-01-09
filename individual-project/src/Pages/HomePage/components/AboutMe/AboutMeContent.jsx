import React from "react";
import galleryImages from "../Gallery/Gallery";
import galleryImagesTags from "../Gallery/Gallery";
import { Gallery } from "../Gallery/Gallery";
import "./AboutMeContent.css";

export class AboutMeContent extends React.Component {
    render() {
        if (this.props.displayedContent === "aboutMe") {
            return (
                <div className="descriptive-div">
                    <div className="text-container">
                        <h1>Wellcome</h1>
                        <h3>My name is Vlad Pop, I am 23 years old and I have created this project using the skills that I have acquired during the Front-end Web Development Course.</h3>
                        <h3>I have studied psychology, which I still find a very interesting scientific domain, I enjoy reading psychological books and even scientific articles.</h3>
                        <h3>However, when it comes to building a professional career, the IT world seems to be more attractive for me.</h3>
                        <h3>Feel free to explore my very first project!</h3>
                    </div>

                </div>
            )
        } else if (this.props.displayedContent === "myHobbies") {
            return (
                <div className="descriptive-div">
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