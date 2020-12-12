import React from "react";
import "./Arcade.css";
import { GameScreen } from "../../Components/Arcade/GameScreen";

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
                    <div className="selectGame" onClick={this.selectHangman}>Hangman</div>
                    <div className="selectGame" onClick={this.selectRockPaperScissors}>Rock Paper Scissors</div>
                </div>
                <GameScreen selectedGame={this.state.selectedGame}></GameScreen>
            </div>
        )
    }
}