import React from 'react';
import dummyData from '../data/DummyData';
import '../styles/HistoricalData.css';

const HistoricalData = () => {
  return (
    <div className="data-component">
      <h2>Historical Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Location</th>
            <th>Sensors Triggered</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{incident.date}</td>
              <td>{incident.location}</td>
              <td>{incident.sensorsTriggered.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalData;
