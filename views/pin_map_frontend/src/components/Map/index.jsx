import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SavedMarker({ position, message, name }) {
    console.log(name);
    return (position === null ? null : (
        <Marker zIndexOffset={2} position={position}>
            <Popup>{name}: {message}</Popup>
        </Marker>
    ))
}

function LocationMarker({ handlePosition, message }) {
    /*
    const customIcon = L.icon({
        iconUrl: `https://www.google.com/mapfiles/ms/micons/red-dot.png`,  // Leaflet uses Google Maps icon URLs
        iconSize: [32, 32],  // Size of the marker
        iconAnchor: [16, 32], // Anchor the marker
    });*/

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            handlePosition(e.latlng);
            setPosition(e.latlng);
            console.log("here", e.latlng);
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return (position === null || message == "" ? null : (
        <Marker zIndexOffset={200} position={position}>
             <Popup>you: {message}</Popup>
        </Marker>
    ))
}

function Map({ handlePosition, message }) {
    const [initialpins, setInitialPins] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3000/pins", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setInitialPins(response))
            .catch((error) => console.log(error))
            .finally(() => setLoaded(true));
    }, []);
    return (
        <>
            <MapContainer
                style={{ height: "80vh", width: "80vw" }}
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {isLoaded && initialpins.map((pin) => <SavedMarker position={{ "lat": pin.latitude, "lng": pin.longitude }} message={pin.message} name={pin.name} />)}
                <LocationMarker handlePosition={handlePosition} message={message} />
                {isLoaded && console.log("here", initialpins[1])}
            </MapContainer>
        </>

    )
}

export default Map;


