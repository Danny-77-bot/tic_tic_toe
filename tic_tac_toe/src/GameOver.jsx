import React from 'react'
import GameState from './GameState'
export default function GameOver({gameState}) {
    switch(gameState) {
        case GameState.playerInProgrss:
            return <></>
        case GameState.playeroWins:
        return <div className='game-over'>O Wins</div> 
        case GameState.playerxWins:
        return <div className="game-over">X Wins</div>
        case GameState.playerDraw:
            return <div className="game-over">Draw</div>
        default:
            return <></>;
    }
  
}
