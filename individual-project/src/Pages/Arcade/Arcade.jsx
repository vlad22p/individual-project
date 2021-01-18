import React from "react";
import "./Arcade.css";
import { GameScreen } from "./components/GameScreen";

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
            <div id="arcade-main-container">
                <div id="game-selector">
                    <div className="select-game" onClick={this.selectHangman}>Hangman</div>
                    <div className="select-game" onClick={this.selectRockPaperScissors}>Rock Paper Scissors</div>
                </div>
                <GameScreen selectedGame={this.state.selectedGame}></GameScreen>
            </div>
        )
    }
}