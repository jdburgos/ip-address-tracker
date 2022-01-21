/** Dependencies **/
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet';
import L from 'leaflet';

/** Hooks **/
import { useAppSelector } from '../../hooks/react-redux';

/** Styles **/
import styles from './Map.module.scss';

const icon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/images/icon-location.svg`,
  iconRetinaUrl: `${process.env.PUBLIC_URL}/images/icon-location.svg`,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(40, 50),
});

export const Map = () => {
  const position = useAppSelector(({ address }) => address.data.position);

  const mapInstance = (map: { panTo: (arg0: [number, number]) => void }) => {
    map.panTo(position);

    return null;
  };

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.map}>
      <MapConsumer>{mapInstance}</MapConsumer>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon} />
    </MapContainer>
  );
};
