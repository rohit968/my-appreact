import React from 'react';
import Square from './square.js';


const Board = (i) => {
  renderSquare(i) {
    return (
      <Square
        key = {i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let rows = [];
    for(let i = 0; i < 3; i++) {
      let columns = [];
      for(let j = 0; j < 3; j++) {
        columns.push(this.renderSquare(3*i+j));
      }
      rows.push(<div key={i} className = "board-row">{columns}</div>);
    }
    

    return (
      <div>
        {rows}
      </div>
    );
  }
}


export default Board;