import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import homebutton from "../../Images/homebutton.png";


export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdownClassName: "dropdownOff"
        }
    }

    displayDropdown = () => {
        this.setState({ dropdownClassName: "dropdownOn"})
    }
    hideDropdown = () => {
        this.setState({ dropdownClassName: "dropdownOff"});
    }

    render() {
        return (
            <div className="headerMainContainer">
                <div className="headerBackground"></div>
                <div className="headerContent">
                    <div className="headerLogo">
                        <Link to="/">
                            <img className="home-button" src={homebutton}></img>
                        </Link>
                    </div>
                    <button className="moreDropdownButton" onClick={this.displayDropdown}>More</button>
                </div>
                <div className={this.state.dropdownClassName} onClick={this.hideDropdown}>
                    <div className="dropdownContent">
                        <Link to="/CV">
                            <button className="dropdownButton">My CV</button>
                        </Link>
                        <Link to="/Arcade">
                            <button className="dropdownButton">Arcade</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}