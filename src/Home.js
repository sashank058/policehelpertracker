import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polyline,lineSymbol } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import firebase, { database } from "firebase";
import { Button } from '@material-ui/core';
import './every.css';

// var db = firebase.database();
// var count = 0;
// var something = db.ref('locations');
// var markers = [];
// something.on('value', function(snapshot){
//   snapshot.forEach(function(childSnapshot){
//     var childdata = childSnapshot.val();
//     markers.push([childdata.latitude, childdata.longitude])
//     count += 1;
//     console.log(count);
//   })
// })

const mapStyles = {
  width: '100%',
  height: '100%'
};
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0, lng: 0,
      posses: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: "Live location of the driver!"
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount = () => {
    var db = firebase.database();
    var something = db.ref('locations')
      something.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childdata = childSnapshot.val();
          //this.setState({lat:childdata.latitude,lng:childdata.longitude});
          this.setState(state => {
            const lat= childdata.latitude;
            const lng= childdata.longitude;
            var cc = {lat: childdata.latitude, lng: childdata.longitude};
            const posses = state.posses.concat(cc);
            return {
              lat,
              lng,
              posses
            };
          });
        })
        })
      }
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
  });
  render(){
      return(
        <div>
        <div className="one">
        <Map
       google={this.props.google}
       zoom={12}
       style={mapStyles}
       initialCenter={{
         lat: 12.9716,
         lng: 77.5946
       }}
     >
     {console.log(this.state.posses)}
     <Marker onClick={this.onMarkerClick} name={'Live location of the driver!'} position = {this.state}/>
      <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
      </InfoWindow>
     <Polyline
                path={this.state.posses}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "20px"
                        }
                    ]
                }}
            />
     </Map>
        </div>
        <Button
          color='default'
          onClick={() => console.log('clicked')}
          fullWidth
          > Change Duty 
        </Button>
        </div>);
    }
}
export default GoogleApiWrapper({
  apiKey: 'Google Api key here'
})(MapContainer);