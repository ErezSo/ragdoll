import React from "react";
import { DevicesDashboard } from "./components";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

const App = () => {
  const { container } = styles;
  return (
    <div style={container}>
      <DevicesDashboard />
    </div>
  );
};

export default App;
