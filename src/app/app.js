import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles within an element with a `board` CSS class.
*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      game: newGame()
    };
  }
  playerMakeMove(index, valuePlayer){
    if(valuePlayer === 1 || valuePlayer === 2) return;
    if(this.state.game.winner) return;
    const newState = makeMove(this.state.game, index);
    this.setState({ game: newState });

  }
  restartGame(){
    this.setState(this.state.game = newGame())
  }
  render(){
    return (
      <div>
        <h2>Tre i rad</h2>
        <div className="message">
            <Message showCurrentGameMessage={this.state.game}/>
        </div>
        <div className="board">
            {this.state.game.board.map((valueTile, index) => (
                  <Tile value={valueTile}
                        key={index}
                        playerMove={() => this.playerMakeMove(index, valueTile)}
                        playerWin={this.state.game.line.includes(index)}
                  />
            ))}
        </div>
        <button onClick={() => this.restartGame()}>Spela Igen</button>
      </div>
    );
  }
}
