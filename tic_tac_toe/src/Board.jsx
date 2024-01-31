import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

export default function Board({tiles,onClickTile,turnPlayer,strikeClass}) {
  return (
    <div className='board'>
     <Tile value={tiles[0]}
       turnPlayer={turnPlayer}
      changeTile={()=>onClickTile(0)} 
       className='right-border bottom-border'/>   
     <Tile value={tiles[1]}
       turnPlayer={turnPlayer}
      changeTile={()=>onClickTile(1)} 
      className='bottom-border right-border' />   
     <Tile value={tiles[2]} 
       turnPlayer={turnPlayer}
     changeTile={()=>onClickTile(2)} 
     className='bottom-border'/>   
     <Tile value={tiles[3]} 
       turnPlayer={turnPlayer}
     changeTile={()=>onClickTile(3)} 
     className='bottom-border right-border'/>   
     <Tile value={tiles[4]} 
       turnPlayer={turnPlayer}
     changeTile={()=>onClickTile(4)} 
     className='bottom-border right-border'/>   
     <Tile value={tiles[5]} 
       turnPlayer={turnPlayer}
     changeTile={()=>onClickTile(5)}
      className='bottom-border'/>   
     <Tile value={tiles[6]}
       turnPlayer={turnPlayer}
      changeTile={()=>onClickTile(6)}
       className='bottom-border right-border'/>   
     <Tile value={tiles[7]} 
       turnPlayer={turnPlayer}
     changeTile={()=>onClickTile(7)}
      className='bottom-border right-border'/>   
     <Tile value={tiles[8]}
       turnPlayer={turnPlayer}
      changeTile={()=>onClickTile(8)}
       className='bottom-border'/>   
     <Strike strikeClass={strikeClass}/>
    </div>
  )
}
