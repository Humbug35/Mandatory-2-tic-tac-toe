/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)

The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export default function Tile(tile){
  let optionsTile;

  switch (tile.value){
      case 1:
        optionsTile = { className: "tile plr1", token: "X"};
        break;
      case 2:
        optionsTile = { className: "tile plr2", token: "O" };
        break;
      default:
        optionsTile = { className: "tile", token: "" };
        break;
  }

  return (
    <div className={optionsTile.className} onClick={() => tile.playerMove()}>
        {optionsTile.token}
    </div>
  );
}
