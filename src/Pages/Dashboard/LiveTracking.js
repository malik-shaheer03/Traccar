import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './LiveTracking.module.css';
import { 
  FaPlay, 
  FaPause, 
  FaExpand, 
  FaCompress,
  FaLayerGroup,
  FaFilter,
  FaSync
} from 'react-icons/fa';

// Custom hook to update map center
const MapUpdater = ({ center }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};

const LiveTracking = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState('satellite');
  const [showFilters, setShowFilters] = useState(false);

  // Mock device data - replace with real data from your API
  const devices = [
    { id: 1, name: 'Vehicle-001', position: [51.505, -0.09], status: 'active', speed: 45, lastUpdate: '2 min ago' },
    { id: 2, name: 'Vehicle-002', position: [51.507, -0.08], status: 'active', speed: 32, lastUpdate: '1 min ago' },
    { id: 3, name: 'Vehicle-003', position: [51.503, -0.11], status: 'offline', speed: 0, lastUpdate: '15 min ago' }
  ];

  const tileLayers = {
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    street: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
  };

  const getDeviceIcon = (status) => {
    const color = status === 'active' ? '#00ff88' : '#ff4444';
    return new Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(`
        <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
          <path fill="${color}" stroke="#fff" stroke-width="2" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z"/>
        </svg>
      `)}`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41]
    });
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Add your tracking logic here
  };

  const handleRefresh = () => {
    // Add refresh logic here
    console.log('Refreshing device locations...');
  };

  const activeDevices = devices.filter(device => device.status === 'active');
  const offlineDevices = devices.filter(device => device.status === 'offline');

  return (
    <div className={`${styles.liveTrackingContainer} ${isFullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.heading}>Live Tracking</h2>
          <div className={styles.statusIndicator}>
            <div className={styles.statusDot}></div>
            <span>{activeDevices.length} Active Devices</span>
          </div>
        </div>
        
        <div className={styles.controls}>
          <button 
            className={`${styles.controlButton} ${isPlaying ? styles.playing : ''}`}
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          
          <button className={styles.controlButton} onClick={handleRefresh}>
            <FaSync />
            <span>Refresh</span>
          </button>
          
          <div className={styles.layerSelector}>
            <FaLayerGroup />
            <select 
              value={selectedLayer} 
              onChange={(e) => setSelectedLayer(e.target.value)}
              className={styles.layerSelect}
            >
              <option value="satellite">Satellite</option>
              <option value="street">Street</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          
          <button 
            className={styles.controlButton}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter />
            <span>Filters</span>
          </button>
          
          <button 
            className={styles.controlButton}
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className={styles.filtersPanel}>
          <div className={styles.filterGroup}>
            <label>Device Status:</label>
            <div className={styles.filterOptions}>
              <label><input type="checkbox" defaultChecked /> Active ({activeDevices.length})</label>
              <label><input type="checkbox" defaultChecked /> Offline ({offlineDevices.length})</label>
            </div>
          </div>
          <div className={styles.filterGroup}>
            <label>Speed Range:</label>
            <input type="range" min="0" max="100" defaultValue="50" className={styles.speedRange} />
          </div>
        </div>
      )}

      <div className={styles.mapWrapper}>
        <MapContainer 
          className={styles.mapContainer} 
          center={[51.505, -0.09]} 
          zoom={13} 
          scrollWheelZoom={true}
        >
          <MapUpdater center={[51.505, -0.09]} />
          <TileLayer
            url={tileLayers[selectedLayer]}
            attribution={selectedLayer === 'satellite' 
              ? '&copy; Esri' 
              : '&copy; OpenStreetMap contributors'
            }
          />
          
          {devices.map(device => (
            <Marker 
              key={device.id} 
              position={device.position} 
              icon={getDeviceIcon(device.status)}
            >
              <Popup>
                <div className={styles.popupContent}>
                  <h4>{device.name}</h4>
                  <p><strong>Status:</strong> {device.status}</p>
                  <p><strong>Speed:</strong> {device.speed} km/h</p>
                  <p><strong>Last Update:</strong> {device.lastUpdate}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className={styles.deviceList}>
        <h3>Device Status</h3>
        <div className={styles.deviceGrid}>
          {devices.map(device => (
            <div key={device.id} className={`${styles.deviceCard} ${styles[device.status]}`}>
              <div className={styles.deviceInfo}>
                <h4>{device.name}</h4>
                <p>Speed: {device.speed} km/h</p>
                <p>Updated: {device.lastUpdate}</p>
              </div>
              <div className={styles.deviceStatus}>
                <div className={`${styles.statusDot} ${styles[device.status]}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
