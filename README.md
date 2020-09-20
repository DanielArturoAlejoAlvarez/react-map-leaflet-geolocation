# REACT-MAP-LEAFLET (GEO-Location)

## Description

This repository is a Software of Application with React,NodeJS,Leaflet,etc

## Installation

Using NodeJS, React preferably.

## Plugins

React Leaflet


## Usage

```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/react-map-leaflet-geolocation[NAME APP]

$ npm install

$ yarn install

```

Follow the following steps and you're good to go! Important:

![alt text](https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1i6h/e51ffc6222fb6517db3b1fefd4870337/687474703a2f2f692e696d6775722e636f6d2f645657766f58562e676966.gif)

## Coding

### Components
```js
...
export const IconLocation = L.icon({
  iconUrl: require('../assets/img/icon.svg'),
  iconRetinaUrl: require('../assets/img/icon.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35,35],
  className: 'leaflet-venue-icon'
});

const MarkerPopup = (props)=>{
  const { name } = props.data 
  
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  )

}

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

function App() {
  return (
   
    <Router>
      <Switch>
      <Route path="/map-view">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}
...
```



## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/react-map-leaflet-geolocation. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

```

```