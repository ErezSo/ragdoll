import React, { Component } from "react";
import { Device } from "../index";

const styles = {
  container: {
    width: "70%",
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

  render() {
    const { devices, searchTerm } = this.state;
    const { container } = styles;
    return (
      <div style={container}>
        {devices.map((device, idx) => <Device key={idx} device={device} />)}
      </div>
    );
  }
}

export default DevicesDashboard;
