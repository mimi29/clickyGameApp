import React from "react"
import Board from "./Board";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topScore: 0,
            totalScore: 0,
            msg: "Click an image to begin!",
            selectedImageIdx: Array(12).fill(0),
        };
    }

    calculateTopScore(p) {
        let tmpScore = 0;
        const selectedImageIdx = this.state.selectedImageIdx.slice();  // make a copy
        if (selectedImageIdx[p] === 0) {
            selectedImageIdx[p] = 1;
            console.log("add point to selectedImageIdx: "+selectedImageIdx[p]+", idx: "+p);
            tmpScore = 1;
        }
        else {
            console.log("reset to zero, idx: "+p);
            tmpScore = 0;
        }

        let topScore = this.state.topScore;
        var tmpTotalScore = this.state.totalScore;
        if (tmpScore === 1) {
            tmpTotalScore += 1;
            if (tmpTotalScore > topScore) {
                this.setState({
                    topScore: tmpTotalScore,
                    totalScore: tmpTotalScore,
                    selectedImageIdx: selectedImageIdx,
                    msg: "You guessed correctly!"
                })
            }
            else {
                this.setState({
                    totalScore: tmpTotalScore,
                    selectedImageIdx: selectedImageIdx,
                    msg: "You guessed correctly!"
                })
            }
        }
        else { 
            this.setState({
                totalScore: 0,
                msg: "You guessed incorrectly!"
            })
        }
    }

    render() {
        return (
            <div>
                <div className="game-header">
                    <li className="brand">Clicking Game</li>
                    <li>{this.state.msg}</li>
                    <li>Score: {this.state.totalScore} | Top Score: {this.state.topScore}</li>
                </div>
                <div className="container">
                    <Board calculateTopScore={this.calculateTopScore.bind(this)} />
                </div>
            </div>

        );
    };
};

export default Game;