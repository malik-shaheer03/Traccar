import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './LiveTracking.module.css';

const LiveTracking = () => {
  return (
    <div className={styles.liveTrackingContainer}>
      <h2 className={styles.heading}>Live Tracking</h2>
      <MapContainer className={styles.mapContainer} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default LiveTracking;
