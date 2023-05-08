import React from 'react';
import dummyData from '../data/DummyData';
import '../styles/AlertNotification.css';
import '../styles/DataSection.css'

const AlertNotifications = () => {
  return (
    <div className="alert-notifications">
      <h2>Alert Notifications</h2>
      <ul>
        {dummyData.incidents.map((incident) => (
          <li key={incident.id}>
            {`Stowaway alert on ${incident.date} at ${incident.location}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertNotifications;
