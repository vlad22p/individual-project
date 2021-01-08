import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import homebutton from "../../Images/icons/homebutton.png";
import morebutton from "../../Images/icons/morebutton.png";



export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdownClassName: "dropdown-off"
        }
    }

    displayDropdown = () => {
        this.setState({ dropdownClassName: "dropdown-on"})
    }
    hideDropdown = () => {
        this.setState({ dropdownClassName: "dropdown-off"});
    }

    render() {
        return (
            <div className="header-main-container">
                <div className="header-background"></div>
                <div className="header-content">
                    <div className="header-logo">
                        <Link to="/">
                            <img className="home-button" src={homebutton}></img>
                        </Link>
                    </div>
                    <div className="more-dropdown-button" onClick={this.displayDropdown}>
                        <img className="morebutton" src={morebutton}></img>
                    </div>
                </div>
                <div className={this.state.dropdownClassName} onClick={this.hideDropdown}>
                    <div className="dropdown-content">
                        <Link to="/CV">
                            <button className="dropdown-button">My CV</button>
                        </Link>
                        <Link to="/Arcade">
                            <button className="dropdown-button">Arcade</button>
                        </Link>
                        <Link to="/MyHomework">
                            <button className="dropdown-button">My Homework</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}