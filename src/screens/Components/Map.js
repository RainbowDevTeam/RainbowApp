import React,{useState,useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import {MapMarkers} from '../../Context/MapMarkers';

const Map=({situation,mapStyle})=>{
    
    const [location,setLocation]= useState({ latitude: 37.78825,longitude: -122.4324});
        findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {setLocation({latitude:position.coords.latitude,longitude:position.coords.longitude});},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
    };
    useEffect(()=>{findCoordinates()},[]);
	
    return<MapView style={mapStyle}
    region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.01,
      }}>
         {MapMarkers.map((marker,index)=>(
        marker.state==situation?
        <Marker key={index} 
        coordinate={{latitude:marker.latitude,longitude:marker.longitude}} 
        pinColor={situation=="safe"?"green":"red"} title={marker.title} 
        description={marker.description}/>
        :null
         ))}
      </MapView>
};
export default Map;