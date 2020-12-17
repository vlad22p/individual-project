import React from "react";
import "./RockPaperScissors.css";
import logo from "../../../Images/Arcade/rock-paper-scissors/logo.png";
import rockImage from "../../../Images/Arcade/rock-paper-scissors/rock.png";
import paperImage from "../../../Images/Arcade/rock-paper-scissors/paper.png";
import scissorsImage from "../../../Images/Arcade/rock-paper-scissors/scissors.png";

export const availableChoices = ["rock", "paper", "scissors"];

export class RockPaperScissors extends React.Component {
    constructor() {
        super();
        this.state = {
            computerChoice: this.getComputerChoice(),
            playerChoice: null,
            computerSrc: null,
            playerSrc: null,
            didGameStart: false,
            gameResult: null
        }
    }

    getComputerChoice = () => {
        return availableChoices[Math.floor(Math.random() * availableChoices.length)];
    }

    chooseRock = () => {
        this.setState({
            playerChoice: "rock",
            playerSrc: rockImage
        });
    }

    choosePaper = () => {
        this.setState({
            playerChoice: "paper",
            playerSrc: paperImage
        });
    }

    chooseScissors = () => {
        this.setState({
            playerChoice: "scissors",
            playerSrc: scissorsImage
        });
    }

    displayComputerChoice = () => {
        if (this.state.computerChoice === "rock") {
            this.setState({ computerSrc: rockImage });
        } else if (this.state.computerChoice === "paper") {
            this.setState({ computerSrc: paperImage });
        } else if (this.state.computerChoice === "scissors") {
            this.setState({ computerSrc: scissorsImage });
        }
    }

    isDraw = () => {
        if (this.state.playerChoice === this.state.computerChoice) {
            this.setState({ gameResult: "Draw" });
            console.log(this.state.gameResult);
            return;
        }
    }

    victoryOrDefeat = () => {
        if (this.state.playerChoice === "rock") {
            if (this.state.computerChoice === "paper") {
                this.setState({ gameResult: "Defeat" });
            } else if (this.state.computerChoice === "scissors") {
                this.setState({ gameResult: "Victory" });
                return;
            }
        }

        if (this.state.playerChoice === "paper") {
            if (this.state.computerChoice === "scissors") {
                this.setState({ gameResult: "Defeat" });
            } else if (this.state.computerChoice === "rock") {
                this.setState({ gameResult: "Victory" });
                return;
            }
        }

        if (this.state.playerChoice === "scissors") {
            if (this.state.computerChoice === "rock") {
                this.setState({ gameResult: "Defeat" });
            } else if (this.state.computerChoice === "paper") {
                this.setState({ gameResult: "Victory" });
                return;
            }
        }
    }

    startGame = () => {
        this.displayComputerChoice();
        this.isDraw();
        this.victoryOrDefeat();
    }

    playAgain = () => {
        this.setState({
            computerChoice: this.getComputerChoice(),
            playerChoice: null,
            computerSrc: null,
            playerSrc: null,
            didGameStart: false,
            gameResult: null
        })
    }

    render() {
        return (
            <div className="RPS-main-container">
                <Battleground
                    playerSrc={this.state.playerSrc}
                    computerSrc={this.state.computerSrc}
                    didGameStart={this.state.didGameStart}
                    gameResult={this.state.gameResult}
                    playAgain={this.playAgain}
                ></Battleground>
                <div className="RPS-choice-container">
                    <img src={rockImage} className="player-choice" choice="rock" onClick={this.chooseRock}></img>
                    <img src={paperImage} className="player-choice" choice="paper" onClick={this.choosePaper}></img>
                    <img src={scissorsImage} className="player-choice" choice="scissors" onClick={this.chooseScissors}></img>
                </div>
                <button onClick={this.startGame}>Start!</button>
            </div>
        )
    }
}

export class Battleground extends React.Component {
    render() {
        return (
            <div className="battleground-container">
                <div className="battleground-up">
                    <div className="player-choice-container">
                        <h2>You chose</h2>
                        <img src={this.props.playerSrc} className="choice-display"></img>
                    </div>
                    <div className="computer-choice-container">
                        <h2>Computer chose</h2>
                        <img src={this.props.computerSrc} className="choice-display"></img>
                    </div>
                </div>
                <div className="battleground-down">
                    <h1>{this.props.gameResult}</h1>
                    <button onClick={this.props.playAgain}>Play again!</button>
                </div>
            </div>
        )
    }
}