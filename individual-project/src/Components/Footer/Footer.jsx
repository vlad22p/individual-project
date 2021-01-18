import React from "react";
import "./Footer.css";
import githubButton from "../../Images/icons/githubbutton.png";
import linkedinButton from "../../Images/icons/linkedin.png";

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer-main-container">
                <div className="footer-background"></div>
                <div className="footer-content">
                    <a href="https://github.com/vladpopgit" target="_blank">
                        <img src={githubButton} alt="Github"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/vlad-pop-ln/" target="_blank">
                        <img src={linkedinButton} alt="Linkedin"></img>
                    </a>
                </div>
            </div>
        )
    }
}