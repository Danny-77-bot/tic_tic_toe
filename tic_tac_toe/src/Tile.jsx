import React from 'react'

export default function Tile({className,value,changeTile,turnPlayer}) {
  let hoverClass=null;
  if(value==null && turnPlayer!=null) {
   hoverClass=`${turnPlayer.toLowerCase()}-hover`;
  }
  return (
    <div onClick={changeTile} className={`tile ${className} ${hoverClass}`}>{value}</div>
  )
}
