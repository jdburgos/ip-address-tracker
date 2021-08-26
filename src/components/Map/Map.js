/** React core **/
import React from "react";

/** Dependencies **/
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

/** Styles **/
import styles from "./Map.module.scss";

export const Map = () => (
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={styles.map}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]} />
  </MapContainer>
);
