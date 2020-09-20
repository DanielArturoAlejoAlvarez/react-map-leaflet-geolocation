import L from 'leaflet'

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