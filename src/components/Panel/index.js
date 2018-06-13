import React from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px"
  },
  active: {
    color: "#1cc51c",
    margin: "0 10px"
  },
  inactive: {
    color: "red",
    margin: "0 10px"
  }
};

const Panel = ({ devices, handleSearch }) => {
  const { container, active, inactive } = styles;
  const numOfActiveDevices = devices.filter(d => d.active).length;
  return (
    <div style={container}>
      <div>
        Active devices:
        <span className="active" style={active}>
          {numOfActiveDevices}
        </span>
        {"/"}
        <span className="inactive" style={inactive}>
          {devices.length - numOfActiveDevices}
        </span>
      </div>
      <div>
        Search: <input type="text" onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Panel;
