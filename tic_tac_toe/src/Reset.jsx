import React from 'react'
import GameState from './GameState'

export default function Reset({gameState,handleReset}) {
    if(gameState===GameState.playerInProgrss) {
        return;
    }
  return (
    <div
     className='reset-button'
     onClick={handleReset} >Play Again</div>
  )
}
