import React from "react";
import { Device } from "../index";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

const DevicesList = ({ devices, searchTerm, toggleDevice }) => {
  const { container } = styles;
  return (
    <div style={container}>
      {devices
        .filter(
          device =>
            device.name.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
        )
        .map(device => (
          <Device
            key={device.timestamp}
            device={device}
            toggleDevice={toggleDevice}
          />
        ))}
    </div>
  );
};

export default DevicesList;
