import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  padding-right: 38px;
  margin: 20px;
`;
const List = styled.ul`
  list-style-type: "none";
`;

const Device = ({ device, toggleDevice, disableButton }) => {
  return (
    <Wrapper>
      <List>
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
      </List>
    </Wrapper>
  );
};

export default Device;
