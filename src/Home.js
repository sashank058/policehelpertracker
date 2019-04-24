import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';

const TOKEN = 'pk.eyJ1Ijoic2FzaGFuazA1OCIsImEiOiJjanV1eng0OXowNXhmNGRsaHNnNG4xeWQ4In0.c7HHqBAPH6J2k_Lu7Vlj7g';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {

constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      }
    };
  }

render() {
    const {viewport} = this.state;

return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}