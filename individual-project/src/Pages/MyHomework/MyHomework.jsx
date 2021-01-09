import React from "react";
import {
    firstJsHomework,
    apodHomework,
    gameListHomework,
    domManipulationHomework,
    semanticTagsHomework,
    rpsHomework,
    thePlayerHomework
} from "./homework";
import githubImage from "../../Images/icons/githubbutton.png";
import "./MyHomework.css";

export const allHomework = [firstJsHomework, apodHomework, gameListHomework, domManipulationHomework, semanticTagsHomework, rpsHomework, thePlayerHomework]

export class MyHomework extends React.Component {
    constructor() {
        super();
        this.state = {
            displayedHomework: firstJsHomework
        }
    }

    selectFirstJs = () => {
        this.setState({ displayedHomework: allHomework[0] })
    }
    selectApod = () => {
        this.setState({ displayedHomework: allHomework[1] });
    }

    selectGameList = () => {
        this.setState({ displayedHomework: allHomework[2] });
    }

    selectDomManipulation = () => {
        this.setState({ displayedHomework: allHomework[3] });
    }

    selectSemantic = () => {
        this.setState({ displayedHomework: allHomework[4] });
    }

    selectRps = () => {
        this.setState({ displayedHomework: allHomework[5] });
    }

    selectPlayer = () => {
        this.setState({ displayedHomework: allHomework[6] });
    }


    render() {
        return (
            <div className="homework-main-container">
                <div className="homework-selector">
                    <div onClick={this.selectFirstJs}>
                        <h3>{allHomework[0].title}</h3>
                    </div>
                    <div onClick={this.selectApod}>
                        <h3>{allHomework[1].title}</h3>
                    </div>
                    <div onClick={this.selectGameList}>
                        <h3>{allHomework[2].title}</h3>
                    </div>
                    <div onClick={this.selectDomManipulation}>
                        <h3>{allHomework[3].title}</h3>
                    </div>
                    <div onClick={this.selectSemantic}>
                        <h3>{allHomework[4].title}</h3>
                    </div>
                    <div onClick={this.selectRps}>
                        <h3>{allHomework[5].title}</h3>
                    </div>
                    <div onClick={this.selectPlayer}>
                        <h3>{allHomework[6].title}</h3>
                    </div>
                </div>
                <div className="homework-display">
                    <h2>{this.state.displayedHomework.title}</h2>
                    <img src={this.state.displayedHomework.image} alt={this.state.displayedHomework.title}></img>
                    <p>{this.state.displayedHomework.description}</p>
                    <a href={this.state.displayedHomework.githubLink} target="_blank">
                        <div className="github-link-container">
                            <img src={githubImage}></img>
                            <h3>Check out the code</h3>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}