import React from "react";
import "./CV.css";
import profile from "../../Images/profile.jpg";

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

const CvAside = () => {
    return (
        <aside>
            <div className="cvAsideSection">
                <h2>Contact</h2>
                <span>Email</span>
                <span>vlad.pop0797@gmail.com</span>
                <span>Phone number</span>
                <span>0761361797</span>
            </div>
            <div className="cvAsideSection">
                <h2>Skills</h2>
                <ul>
                    <li>Adaptability</li>
                    <li>Information gathering</li>
                    <li>Ability to work under pressure</li>
                    <li>Problem solving</li>
                    <li>Critical thinking</li>
                    <li>Comunication</li>
                </ul>
            </div>
            <div className="cvAsideSection">
                <h2>Languages</h2>
                <span>English</span>
            </div>
        </aside>
    )
}

const CvMain = () => {
    return (
        <main>
            <div className="cvMainSection">
                <h2>Profile</h2>
                <p>Customer support representative with a high desire to learn. Interested in Web
                development, I am motivated to invest time in learning about web applications and the
                tools that are used to build them. I have started to acquire basic knowledge about HTML,
                CSS, Javascript and the way they interact by attending to courses, watching online tutorials,
                reading documentation and creating small web applications.
                </p>
                <p>I am eager to deepen my knowledge as I consider a career in this field.</p>
            </div>
            <div className="cvMainSection">
                <h2>Employment History</h2>
                <h3>Customer Support Representative, SYKES ENTERPRISES EASTERN EUROPE S.R.L</h3>
                <span>Nov 2019 - Present</span>
                <span>Cluj-Napoca</span>
            </div>
            <div className="cvMainSection">
                <h2>Education</h2>
                <h3>Babes-Boliay University, Psychology</h3>
                <span>2016 - 2019</span>
                <span>Cluj-Napoca</span>
            </div>
            <div className="cvMainSection">
                <h2>Courses</h2>
                <h3>Introduction to IT, The Informal School of IT</h3>
                <span>Jun 2020 - Jul 2020</span>
                <span>Cluj-Napoca</span>
                <h3>Front-end Web Development, The Informal School of IT</h3>
                <span>Jul 2020 - Dec 2020</span>
                <span>Cluj-Napoca</span>
            </div>
            <div className="cvMainSection">
                <h2>Volunteering</h2>
                <h3>Romanian Red Cross</h3>
                <span>2019</span>
                <span>Cluj-Napoca</span>
            </div>
        </main>
    )
}