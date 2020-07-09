import React, { useState, useContext, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { GlobalContext } from '../context/GlobalState';
import mapStyles from '../mapStyles'
import NumberFormat from 'react-number-format';

const mapContainerStyle = {
    width: '75vw',
    height: '70vh'
};

const center = {
    lat: 30,
    lng: 70
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
};

export default function Map() {
    const { countriesList } = useContext(GlobalContext);
    const [clickedCountry, setClickedCountry] = useState(null);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error loading Google Maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={4}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {countriesList.map((country) => (
                    <Marker
                        key={country.countryInfo.iso2}
                        position={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
                        icon={{
                            url: "/pin.svg",
                            scaledSize: new window.google.maps.Size(25, 25),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(13, 13),
                        }}
                        onClick={() => {
                            setClickedCountry(country);
                        }}
                    />
                ))}

                {clickedCountry ? (
                    <InfoWindow
                        position={{ lat: clickedCountry.countryInfo.lat, lng: clickedCountry.countryInfo.long }}
                        onCloseClick={() => {
                            setClickedCountry(null);
                        }}
                    >
                        <div>
                            <h2>{clickedCountry.country}</h2>
                            <p style={{ fontWeight: 'bold' }}>
                                Total: <NumberFormat value={clickedCountry.cases} displayType={'text'} thousandSeparator={true} decimalScale={2} /><br />
                                Active: <NumberFormat value={clickedCountry.active} displayType={'text'} thousandSeparator={true} decimalScale={2} /><br />
                                Recovered: <NumberFormat value={clickedCountry.recovered} displayType={'text'} thousandSeparator={true} decimalScale={2} /><br />
                                Fatal: <NumberFormat value={clickedCountry.deaths} displayType={'text'} thousandSeparator={true} decimalScale={2} /><br />
                                Critical: <NumberFormat value={clickedCountry.critical} displayType={'text'} thousandSeparator={true} decimalScale={2} /><br />
                            </p>
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    );
}