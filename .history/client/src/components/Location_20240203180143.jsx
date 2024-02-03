import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // You might need to import leaflet CSS as well
import gps from "../assets/icons/gps.svg";
import 


const Location = ({ lawyer }) => {
  const position = [36.74303162425042, 5.055891413920318]; // Latitude and Longitude

  const customMarkerIcon = L.icon({
    iconUrl: gps,
    iconSize: [30, 30]
  });

  return (
    <div id="location" className="w-full">
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup>
            {lawyer?.avocat?.ville || lawyer?.ville} -{" "}
            {lawyer?.avocat?.region || lawyer?.region}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;

