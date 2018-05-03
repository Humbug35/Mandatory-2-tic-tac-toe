/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
  let currentMessage;
  const gameMessage = {
    playerOne: 'Det är spelare 1 tur att spela',
    playerTwo: 'Det är spelare 2 tur att spela',
    playerOneWin: 'Spelet slut, nu vann spelare 1, HURRA!',
    playerTwoWin: 'Spelet slut, nu vann spelare 2, HURRA!',
    draw: 'Spelet slut, ingen vann. Spela igen? Tryck på spela igen'
  };

    if(props.showCurrentGameMessage.winner === 1 || props.showCurrentGameMessage.winner === 2) {
        if (props.showCurrentGameMessage.winner === 1) {
            currentMessage = gameMessage.playerOneWin;
        } else {
            currentMessage = gameMessage.playerTwoWin;
        }
    }
    else if(props.showCurrentGameMessage.board.includes(0) === false) {
      currentMessage = gameMessage.draw;
    }
    else{
        if(props.showCurrentGameMessage.playerState === "plr1") {
            currentMessage = gameMessage.playerOne;
        }else {
            currentMessage = gameMessage.playerTwo;
        }
    }

  return (
    <div>
        {currentMessage}
    </div>
  );
}
