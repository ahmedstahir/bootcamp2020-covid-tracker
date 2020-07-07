import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

function myMap() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45, lng: -75}} />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(myMap));

export default function Map() {
    return (
        <div style={{ padding: '0' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
            </div>
    );
}