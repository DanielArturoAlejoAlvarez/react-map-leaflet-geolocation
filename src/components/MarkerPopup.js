import React from 'react'
import { Popup } from 'react-leaflet'

const MarkerPopup = (props)=>{
  const { name } = props.data 
  
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  )

}

export default MarkerPopup