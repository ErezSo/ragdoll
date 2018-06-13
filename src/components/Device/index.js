import React from "react";

const styles = {
  container: {
    border: "1px solid black",
    paddingRight: 38,
    margin: 20
  },
  list: {
    listStyleType: "none"
  }
};

const Device = ({ device, toggleDevice, disableButton }) => {
  const { container, list } = styles;
  return (
    <div style={container}>
      <ul style={list}>
        <li>Name: {device.name}</li>
        <li>Unit: {device.unit}</li>
        <li>Value: {device.value}</li>
        <li>Timestamp: {new Date(device.timestamp).toLocaleString()}</li>
        <li>
          Status: {device.active ? "Active" : "Inactive"}{" "}
          <span>
            <button
              disabled={disableButton}
              onClick={() => toggleDevice(device)}
            >
              Toggle
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Device;
