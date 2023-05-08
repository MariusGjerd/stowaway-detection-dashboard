import React from 'react';
import './App.css';
import ShipLayout from './components/ShipLayout';
import SensorData from './components/SensorData';
import AlertNotifications from './components/AlertNotifications';
import HistoricalData from './components/HistoricalData';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Stowaway Detection Dashboard</h1>
      </header>
      <main>
        <ShipLayout />
        <div>
        <SensorData />
        <AlertNotifications />
        <HistoricalData />
        </div>
      </main>
    </div>
  );
}

export default App;
