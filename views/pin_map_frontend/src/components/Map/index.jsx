import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pinService from "../../utils/pinService";


function SavedMarker({ position, message }) {
    return (position === null ? null : (
        <Marker position={position}>
            <Popup>{message}</Popup>
        </Marker>
    ))
}

function LocationMarker({ handlePosition, message }) {
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
        <Marker position={position}>
            <Popup>{message}</Popup>
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
                <LocationMarker handlePosition={handlePosition} message={message} />
                {isLoaded && console.log({ "lat": Number(initialpins[10].latitude), "lng": Number(initialpins[10].longitude) })}
                {isLoaded && <SavedMarker position={{ "lat": Number(initialpins[10].longitude), "lng": Number(initialpins[10].latitude)}} message="test" />}
            </MapContainer>
        </>

    )
}

export default Map;


