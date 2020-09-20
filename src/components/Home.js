import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [state, setState] = useState({    
    longitude: 0,
    latitude: 0
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position){
        //console.log(position)
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      },
      function(error) {
        console.log(error)
      },
      {
        enableHighAccuracy: true
      }
    )}, [])

  return (
    <div>
      <h1>GEO-Location</h1>
      <h3>Latitude: {state.latitude}</h3>
      <h3>Longitude: {state.longitude}</h3>
      <Link to={{
        pathname: "/map-view",
        state
      }}>See my Geolocation</Link>
    </div>
  )
}

export default Home
