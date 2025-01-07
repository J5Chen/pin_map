
import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker({ handlePosition }) {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            handlePosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return (position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    ))
}

function Map({ handlePosition }) {
    return (
        <MapContainer
            style={{ height: "80vh", width: "80vw" }}
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker handlePosition={handlePosition} />
        </MapContainer>
    )
}

export default Map;