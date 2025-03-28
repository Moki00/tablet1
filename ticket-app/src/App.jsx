import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "@/components/HomeScreen";
import BatterySwap from "@/components/BatterySwap";
// import RadioUI from "@/components/RadioUI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/battery" element={<BatterySwap />} />
        <Route path="/radio" element={<BatterySwap />} />
        <Route path="/accessories" element={<BatterySwap />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
