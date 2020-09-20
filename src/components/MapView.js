import React, { useState, useEffect } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'

import data from '../assets/data.json'
import { useLocation, useHistory } from 'react-router-dom'


const MapView = (props) => {  

  

  const [state,setState] = useState({
    currentLocation: {
      lat: 52.500772,
      lng: 13.472764
    },
    zoom: 13,
    data
  })

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude
      }
      setState({
        ...state,
        currentLocation
      })

      history.replace({
        pathname: '/map-view',
        state: {}
      })
    }
    
  }, [location])

  return (
    <div>
      <Map center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Markers places={state.data.places}/>
      </Map>
    </div>
  )
}

export default MapView
