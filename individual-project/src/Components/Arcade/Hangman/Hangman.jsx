import React from "react";
import hangman1 from "../../../Images/Arcade/Hangman/hangman1.png";
import hangman2 from "../../../Images/Arcade/Hangman/hangman2.png";
import hangman3 from "../../../Images/Arcade/Hangman/hangman3.png";
import hangman4 from "../../../Images/Arcade/Hangman/hangman4.png";
import hangman5 from "../../../Images/Arcade/Hangman/hangman5.png";
import hangman6 from "../../../Images/Arcade/Hangman/hangman6.png";
import hangman7 from "../../../Images/Arcade/Hangman/hangman7.png";
import "./Hangman.css";

export const hangmanImages = [hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7]
export const hangmanWords = ["javascript", "ajax", "function", "array", "object", "json", "html", "css", "hoisting", "class"]


export class Hangman extends React.Component {
    constructor() {
        super();
        this.state = {
            gameOver: null,
            maximumMistakes: 6,
            mistakesMade: 0,
            imageIndex: 0,
            gameWord: this.getRandomWord(),
            wordLetters: [],
            guessedLetters: []
        }
    }

    getRandomWord = () => {
        return hangmanWords[Math.round(Math.random() * hangmanWords.length)];
    }

    renderWord = () => {
        return this.state.gameWord.split("").map(letter => (this.state.guessedLetters.includes(letter) ? letter : " _ "));
    }

    checkLetter = (event) => {
        if (!this.state.guessedLetters.includes(event.target.value) && this.state.gameWord.includes(event.target.value)) {
            this.state.guessedLetters.push(event.target.value);
            this.setState({ guessedLetters: this.state.guessedLetters });
            console.log(this.state.guessedLetters);
        } else if (!this.state.gameWord.includes(event.target.value)) {
            console.log("wrong");
            this.setState({
                mistakesMade: this.state.mistakesMade + 1,
                imageIndex: this.state.imageIndex + 1
            })
        }
    }

    isGameLost = (event) => {
        if (this.state.mistakesMade === 5 && !this.state.gameWord.split("").includes(event.target.value)) {
            this.setState({ gameOver: "lost" });
            console.log("game lost");
        }
    }

    render() {
        const keyboard = "abcdefghijklmnopqrstuvwxyz".split("").map(character =>
            <button
                onClick={(e) => { this.checkLetter(e); this.isGameLost(e); }}
                key={character}
                value={character}
            >{character}
            </button>
        );
        if (this.state.gameOver === null) {
            return (
                <div className="gameContainer">
                    <img className="hangmanImage" src={hangmanImages[this.state.imageIndex]}></img>
                    <p>Guess the web-development related word</p>
                    <p>{this.renderWord()}</p>
                    <p>You have made {this.state.mistakesMade}/{this.state.maximumMistakes} mistakes.</p>
                    <div className="hangmanKeyboard">{keyboard}</div>
                </div>
            )
        } else if (this.state.gameOver === "lost") {
            return (
                <div className="gameContainer">
                    <img src={hangman7}></img>
                    <p>You have lost the game.</p>
                    <p>The word was {this.state.gameWord}</p>
                    <button onClick={() => this.setState({
                        gameOver: null,
                        maximumMistakes: 6,
                        mistakesMade: 0,
                        imageIndex: 0,
                        gameWord: this.getRandomWord(),
                        wordLetters: [],
                        guessedLetters: []
                    })}>Play Again!</button>
                </div>
            )
        }
    }
}

