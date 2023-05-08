const dummyData = {
    sensors: [
      { id: 1, type: "infrared", location: "Hatch 1", status: "active", position: { x: 10, y: 15 }, },
      { id: 2, type: "co2", location: "Cargo Hold 2", status: "inactive", position: { x: 5, y: 25 }, },
      // Add more sensor data as needed
    ],
    incidents: [
      { id: 1, date: "2023-04-01", location: "Port of Hamburg", sensorsTriggered: [1, 2] },
      // Add more incident data as needed
    ],
  };
  
  export default dummyData;
  