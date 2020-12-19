import React from "react";
import "./RockPaperScissors.css";
import logo from "../../../../Images/Arcade/rock-paper-scissors/logo.png";
import rockImage from "../../../../Images/Arcade/rock-paper-scissors/rock.png";
import paperImage from "../../../../Images/Arcade/rock-paper-scissors/paper.png";
import scissorsImage from "../../../../Images/Arcade/rock-paper-scissors/scissors.png";

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

    gameDidStart = () => {
        this.setState({ didGameStart: true });
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
        this.gameDidStart();
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
        if (!this.state.didGameStart) {
            return (
                <PlayerChoice
                    chooseRock={this.chooseRock}
                    choosePaper={this.choosePaper}
                    chooseScissors={this.chooseScissors}
                    playerSrc={this.state.playerSrc}
                    startGame={this.startGame}
                ></PlayerChoice>
            )
        } else {
            return (
                <PlayerVsComputer
                    playerSrc={this.state.playerSrc}
                    computerSrc={this.state.computerSrc}
                    gameResult={this.state.gameResult}
                    playAgain={this.playAgain}
                ></PlayerVsComputer>
            )
        }
    }
}

export class PlayerChoice extends React.Component {
    render() {
        return (
            <div className="game-beginning">
                <div className="displayed-player-choice">
                    <h1>Make your choice!</h1>
                    <img src={this.props.playerSrc}></img>
                </div>
                <div className="RPS-choice-container">
                    <img src={rockImage} className="player-choice" choice="rock" onClick={this.props.chooseRock}></img>
                    <img src={paperImage} className="player-choice" choice="paper" onClick={this.props.choosePaper}></img>
                    <img src={scissorsImage} className="player-choice" choice="scissors" onClick={this.props.chooseScissors}></img>
                </div>
                <button className="game-button" onClick={this.props.startGame}>Start!</button>
            </div>
        )
    }
}

export class PlayerVsComputer extends React.Component {
    render() {
        return (
            <div className="game-result">
                <div className="both-choices">
                    <div className="choice-container">
                        <h2>You chose</h2>
                        <img src={this.props.playerSrc}></img>
                    </div>
                    <div className="choice-container">
                        <h2>The computer chose</h2>
                        <img src={this.props.computerSrc}></img>
                    </div>
                </div>
                <h1>{this.props.gameResult}</h1>
                <button className="game-button" onClick={this.props.playAgain}>Play Again!</button>
            </div>
        )
    }
}