/* eslint-disable no-console */
import React, { Component } from "react";
import styled from "styled-components";
import { DevicesList, Panel } from "../index";

const Wrapper = styled.div`
  width: 80%;
  min-height: 700px;
  max-width: 1400px;
`;

class DevicesDashboard extends Component {
  state = {
    devices: [],
    searchTerm: ""
  };

  componentDidMount() {
    return fetch("http://127.0.0.1:8888/device")
      .then(res => res.json())
      .then(res => this.setState({ devices: res.data }))
      .catch(err => console.error(err)); // eslint-disable-line no-console
  }

  handleSearch = e => {
    this.setState({ searchTerm: e.target.value });
  };

  toggleDevice = device => {
    const active = !device.active;
    return fetch(
      `http://127.0.0.1:8888/device/${device.name}?active=${active}`,
      {
        method: "PATCH"
      }
    )
      .then(res => {
        res.status === 200 &&
          this.setState(({ devices }) => ({
            devices: devices.map(
              d =>
                d.name === device.name ? Object.assign({}, d, { active }) : d
            )
          }));
        res.status === 400 && console.log("Something went wrong.");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { devices, searchTerm } = this.state;
    return (
      <Wrapper>
        <Panel devices={devices} handleSearch={this.handleSearch} />
        <DevicesList
          devices={devices}
          searchTerm={searchTerm}
          toggleDevice={this.toggleDevice}
        />
      </Wrapper>
    );
  }
}

export default DevicesDashboard;
