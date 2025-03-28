import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const BatterySwap = () => {
  const [radioSerial, setRadioSerial] = useState("");
  const [batterySerial, setBatterySerial] = useState("");

  const handleSwap = () => {
    if (!radioSerial || !batterySerial) {
      alert("Please enter both Radio and Battery Serials.");
      return;
    }
    alert(`Battery ${batterySerial} assigned to Radio ${radioSerial}`);
  };

  return (
    <div className="screen">
      <h2>Battery Swap</h2>
      <Input
        label="Radio Serial Number"
        value={radioSerial}
        onChange={(e) => setRadioSerial(e.target.value)}
        placeholder="Scan or enter Radio Serial"
      />
      <Input
        label="Battery Serial"
        value={batterySerial}
        onChange={(e) => setBatterySerial(e.target.value)}
        placeholder="Scan or enter Battery Serial"
      />
      <Button text="Confirm Swap" onClick={handleSwap} color="green" />
    </div>
  );
};

export default BatterySwap;
