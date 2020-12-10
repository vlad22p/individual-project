import React from "react";
import "./Arcade.css";

export class Arcade extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedGame: null
        }
    }

    selectHangman = () => {
        this.setState({selectedGame:"hangman"});
    }

    selectRockPaperScissors = () => {
        this.setState({selectedGame:"rockPaperScissors"});
    }

    render() {
        return (
            <div id="arcadeMainContainer">
                <div id="gameSelector">
                    <div onClick={this.selectHangman}>Hangman</div>
                    <div onClick={this.selectRockPaperScissors}>Rock Paper Scissors</div>
                </div>
            </div>
        )
    }
}