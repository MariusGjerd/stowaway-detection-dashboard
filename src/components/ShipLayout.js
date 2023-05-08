import React from 'react';
import dummyData from '../data/DummyData';
import '../styles/ShipLayout.css';

const ShipLayout = () => {
  return (
    <div className="ship-layout">
      <h2>Ship Layout</h2>
      <div className="ship" style={{ backgroundImage: "url('/boat-deck.png')" }}>
        {dummyData.sensors.map((sensor) => (
          <div
            key={sensor.id}
            className={`sensor ${sensor.type}`}
            title={`${sensor.type.toUpperCase()} Sensor at ${sensor.location}`}
            style={{
              position: 'absolute',
              left: `${sensor.position.x}%`,
              top: `${sensor.position.y}%`,
            }}
          >
            {sensor.id}
          </div>
        ))}
      </div>
      <div className="legend">
      <h3>Sensors</h3>
      <div>
        <span className="infrared"> 1</span> Infrared Sensor
      </div>
      <div>
        <span className="co2">2</span> CO2 Sensor
      </div>
    </div>
    </div>
  );
};

export default ShipLayout;
