import React from 'react';
import dummyData from '../data/DummyData';
import '../styles/SensorData.css';

const SensorData = () => {
  return (
    <div className="sensor-data">
      <h2>Sensor Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.sensors.map((sensor) => (
            <tr key={sensor.id}>
              <td>{sensor.id}</td>
              <td>{sensor.type}</td>
              <td>{sensor.location}</td>
              <td>{sensor.status}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
    );
};

export default SensorData;
