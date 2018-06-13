import React from "react";
import styled from "styled-components";
import { Device } from "../index";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DevicesList = ({ devices, searchTerm, toggleDevice }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default DevicesList;
