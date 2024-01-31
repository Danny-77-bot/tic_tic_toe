import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './Reset';
import gameoverSoundAsset from '../src/sounds/gameover.wav';
import clickSoundAsset from '../src/sounds/playSound.wav';

const gameOverSound=new Audio(gameoverSoundAsset);
gameOverSound.volume=0.2;
const clickSound=new Audio(clickSoundAsset);
clickSound.volume=0.5;
const player_x='X';
const player_o='O';

const winningCombinations=[
   //rows
  {
    combo:[0,1,2],strikeClass:'strike-row-1',
  },
  {
    combo:[3,4,5],strikeClass:'strike-row-2',
  },
  {
    combo:[6,7,8],strikeClass:'strike-row-3',
  },
  //columns 
  {
    combo:[0,3,6],strikeClass:'strike-column-1',
  },
  {
    combo:[1,4,7],strikeClass:'strike-column-2',
  },
  {
    combo:[2,5,8],strikeClass:'strike-column-3',
  },
  //diagonals
  {
    combo:[0,4,8],strikeClass:'strike-diagonal-1',
  },
  {
    combo:[2,4,6],strikeClass:'strike-diagonal-2',
  }
]
function checkWinner (tiles,setStrikeClass,setGameState) {
  for(let winnerCombination of winningCombinations) {
    const {combo,strikeClass}=winnerCombination;
    const tilevalue1=tiles[combo[0]];
    const tileValue2=tiles[combo[1]];
    const tileValue3=tiles[combo[2]];

    if(tilevalue1!==null && tilevalue1===tileValue2 && tilevalue1===tileValue3) {
      setStrikeClass(strikeClass);
      if(tilevalue1===player_x) {
        setGameState(GameState.playerxWins);
      }
      else {
        setGameState(GameState.playeroWins);
      }
      return;
    }
  }
  const areAllTilesFilledIn=tiles.every((tile)=>tile!==null);
  if(areAllTilesFilledIn) {
    setGameState(GameState.playerDraw);
  }
}
export default function TicTacToe() {
    const [tiles,setTiles]=useState(Array(9).fill(null));
    const [turnPlayer,setTurnPlayer]=useState(player_x);
    const [strikeClass,setStrikeClass]=useState();
    const [gamestate,setGameState]=useState(GameState.playerInProgrss);
    function handleClick (index) {
      if(gamestate!==GameState.playerInProgrss) {
        return ;
      }
      if(tiles[index]!==null) {
        return;
      }
      const newTiles=[...tiles];
      newTiles[index]=turnPlayer;
      setTiles(newTiles);
       if(turnPlayer===player_x) {
        setTurnPlayer(player_o);
       }
       else {
        setTurnPlayer(player_x);
       }
    };
    function handleReset() {
      setGameState(GameState.playerInProgrss);
      setTiles(Array(9).fill(null));
      setTurnPlayer(player_x);
      setStrikeClass(null);
    }
    useEffect(()=>{
      checkWinner(tiles,setStrikeClass,setGameState);
    },[tiles])
    useEffect(()=>{
      if(tiles.some((tile)=>tile!==null)) {
        clickSound.play();
      }
    },[tiles])

    useEffect(()=>{
      if(gamestate!==GameState.playerInProgrss) {
       gameOverSound.play();
      }
    },[gamestate])
  return (
    <div>
    <h1>tic tac toe</h1>
    <Board
     tiles={tiles} 
     onClickTile={handleClick}
    turnPlayer={turnPlayer}
    strikeClass={strikeClass}
    />
    <GameOver gameState={gamestate}/>
    <Reset gameState={gamestate} handleReset={handleReset}/>
    </div>
  )
}
