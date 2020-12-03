import React from "react";
import "./Gallery.css";
import g1 from "../../Images/HomePage/Gallery/g1.jpg";
import g2 from "../../Images/HomePage/Gallery/g2.jpg";
import g3 from "../../Images/HomePage/Gallery/g3.jpg";
import g4 from "../../Images/HomePage/Gallery/g4.jpg";
import g5 from "../../Images/HomePage/Gallery/g5.jpg";
import g6 from "../../Images/HomePage/Gallery/g6.jpg";
import g7 from "../../Images/HomePage/Gallery/g7.jpg";
import g8 from "../../Images/HomePage/Gallery/g8.jpg";
import g9 from "../../Images/HomePage/Gallery/g9.jpg";

export const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
export const galleryImagesTags = galleryImages.map(images => <img className="galleryImage" src={images}></img>);

export class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            displayedImage: false,
            displayedImageSrc: null
        }
    }

    displayImage = (event) => {
        this.setState({
            displayedImage: true,
            displayedImageSrc: event.target.src
        })
    }

    hideImage = (event) => {
        if (event.target.matches('.displayedImageContainer')) {
            this.setState({
                displayedImage: false,
                displayedImageSrc: null
            });
        }
    }

    render() {
        return (
            <div>
                <div className="galleryMainContainer">
                    <div onClick={this.displayImage} className="galleryContainer">
                        {galleryImagesTags}
                    </div>
                </div>
                <DisplayedImage
                    displayedImage={this.state.displayedImage}
                    displayedImageSrc={this.state.displayedImageSrc}
                    hideImage={this.hideImage}
                ></DisplayedImage>
            </div>
        )
    }
}

export class DisplayedImage extends React.Component {

    render() {
        if (this.props.displayedImage) {
            return (
                <div>
                    <div className="displayedImageBackground" ></div>
                    <div onClick={this.props.hideImage} className="displayedImageContainer">
                        <img className="displayedImage" src={this.props.displayedImageSrc}></img>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}