import React from 'react'
import { IconLocation } from './IconLocation'

import { Marker } from 'react-leaflet';
import MarkerPopup from './MarkerPopup';

const Markers = (props) => {


  const { places } = props

  const markers = places.map((place,index)=>(
    <Marker 
      key={index}
      position={place.geometry} 
      icon={IconLocation}
    >
      <MarkerPopup data={place}/>
    </Marker>
  ))


  return (
    <div>
      {markers}
    </div>
  )
}

export default Markers
