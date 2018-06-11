import React, { Component } from "react";
import { Device } from "../index";

const styles = {
  container: {
    width: "80%",
    minHeight: 700
  },
  panel: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between"
  },
  panelItem: {
    margin: "0 20px"
  },
  list: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  }
};

class DevicesDashboard extends Component {
  state = {
    devices: [],
    searchTerm: ""
  };

  componentDidMount() {
    return fetch("http://127.0.0.1:8888/device")
      .then(res => res.json())
      .then(res => this.setState({ devices: res.data }))
      .catch(err => console.error(err));
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { devices, searchTerm } = this.state;
    const { container, panel, panelItem, list } = styles;
    const numOfActiveDevices = devices.filter(d => d.active).length;
    return (
      <div style={container}>
        <div style={panel}>
          <div style={panelItem}>
            Active:
            <span style={{ color: "green", margin: "0 10px" }}>
              {numOfActiveDevices}
            </span>
            {"/"}
            <span style={{ color: "red", margin: "0 10px" }}>
              {devices.length - numOfActiveDevices}
            </span>
          </div>
          <div style={panelItem}>
            Search: <input type="text" onChange={this.handleChange} />
          </div>
        </div>
        <div style={list}>
          {devices
            .filter(
              device =>
                device.name.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
            )
            .map((device, idx) => <Device key={idx} device={device} />)}
        </div>
      </div>
    );
  }
}

export default DevicesDashboard;
