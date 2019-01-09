import React from "react";

class GameInfo extends React.Component {

    state = {
        topScore:0,
        totalScore:0,
        msg: "Click an image to begin!",
    }

    render() {
        return (
            <div className="game-header" >
                <li className="brand">Clicking Game</li>
                <li>{this.state.msg}</li>
                <li>Score: {this.state.totalScore} | Top Score: {this.state.topScore}</li>
            </div>
        );
    };
}

export default GameInfo;