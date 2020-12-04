import React from "react";
import galleryImages from "../Gallery/Gallery";
import galleryImagesTags from "../Gallery/Gallery";
import { Gallery } from "../Gallery/Gallery";

export class AboutMeContent extends React.Component {
    render() {
        if (this.props.displayedContent==="aboutMe") {
            return(
                <p>This is the "about me" content</p>
            )
        } else if (this.props.displayedContent==="myHobbies") {
            return(
                <p>This is the "my hobbies" content</p>
            )
        } else if (this.props.displayedContent==="photos") {
            return(
                <Gallery></Gallery>
            )
        }
    }
}