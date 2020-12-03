import React from "react";
import "./Footer.css";

export class Footer extends React.Component {
    render() {
        return (
            <div className="footerMainContainer">
                <div className="footerBackground"></div>
                <div className="footerContent">
                    <button>this is the footer</button>
                </div>
            </div>
        )
    }
}