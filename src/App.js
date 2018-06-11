import React from "react";
import { DevicesDashboard } from "./components";

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

function App() {
  const { container } = styles;
  return (
    <div style={container}>
      <DevicesDashboard />
    </div>
  );
}

export default App;
