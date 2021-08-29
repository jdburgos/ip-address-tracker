/** React core **/
import React from 'react';

/** Dependencies **/
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

/** Styles **/
import styles from './Map.module.scss';


const icon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/images/icon-location.svg`,
  iconRetinaUrl: `${process.env.PUBLIC_URL}/images/icon-location.svg`,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 50)
});

export const Map = () => (
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={styles.map}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]} icon={icon} />
  </MapContainer>
);
