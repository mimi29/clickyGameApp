import React from "react";

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
    }
  }

  handleClick = () => {
    this.props.onClickFunction(this.props.idx);
  }

  render() {
    return (
      <button className="square" onClick={this.handleClick} >
        <img src={require('../img/'+this.props.idx+'.jpg')} width="200" height="200" alt="img" />
      </button>
    );
  }
}

export default Square;