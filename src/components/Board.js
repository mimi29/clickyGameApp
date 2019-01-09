import React from "react";
import Square from "./Square"

const imgIndex  = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [3, 5, 7, 9, 2, 4, 6, 8, 10, 11, 0, 1],
    [6, 4, 5, 2, 0, 1, 3, 11, 8, 9, 10, 7],
    [9, 7, 1, 4, 11, 5, 10, 3, 2, 6, 8, 0],
    [11, 9, 2, 8, 6, 5, 4, 3, 7, 0, 10, 1],
    [7, 2, 1, 3, 4, 0, 6, 5, 8, 10, 11, 9],
    [4, 1, 2, 10, 5, 9, 11, 7, 8, 0, 3, 6],
    [6, 1, 10, 0, 11, 7, 3, 5, 8, 9, 2, 4],
    [8, 10, 5, 3, 4, 2, 0, 7, 1, 9, 6, 11],
    [5, 0, 2, 3, 4, 1, 6, 7, 8, 9, 11, 10],
    [11, 1, 2, 5, 4, 3, 6, 7, 0, 8, 10, 9],
    [3, 1, 4, 8, 11, 7, 5, 6, 2, 9, 10, 0],
];

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(12).fill(0),
            currentIdx: 0,
            subTotal:0,
        }
    }

    calculateScore = (p) => {
       this.props.calculateTopScore(p);
    }

    renderSquare(i) {
        return (
            <Square onClickFunction={this.calculateScore}
                idx={i}/>
        );
    }

    generateRandomNumber() {
        return Math.floor((Math.random() * 11)+1);
    }

    render() {
        let randomNumber = this.generateRandomNumber();
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(imgIndex[randomNumber][0])}
                    {this.renderSquare(imgIndex[randomNumber][1])}
                    {this.renderSquare(imgIndex[randomNumber][2])}
                    {this.renderSquare(imgIndex[randomNumber][3])}
                </div>
                <div className="board-row">
                    {this.renderSquare(imgIndex[randomNumber][4])}
                    {this.renderSquare(imgIndex[randomNumber][5])}
                    {this.renderSquare(imgIndex[randomNumber][6])}
                    {this.renderSquare(imgIndex[randomNumber][7])}
                </div>
                <div className="board-row">
                    {this.renderSquare(imgIndex[randomNumber][8])}
                    {this.renderSquare(imgIndex[randomNumber][9])}
                    {this.renderSquare(imgIndex[randomNumber][10])}
                    {this.renderSquare(imgIndex[randomNumber][11])}
                </div>
            </div>
        );
    };
}

export default Board;