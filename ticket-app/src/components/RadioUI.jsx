import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function RadioUI() {
  const [screen, setScreen] = useState("home");
  const [radioSerial, setRadioSerial] = useState("");
  const [status, setStatus] = useState(null);

  const handleSwapConfirm = () => {
    if (RadioSerial) {
      setStatus("success");
      setTimeout(() => setScreen("home"), 2000);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {screen === "home" && (
        <Card className="w-full max-w-md p-6 text-center">
          <CardContent>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-2xl font-bold mb-4">Select Action</h1>
              <Button
                onClick={() => setScreen("batterySwap")}
                className="w-full mb-2"
              >
                Battery Swap
              </Button>
              <Button
                onClick={() => setScreen("radioRepair")}
                className="w-full mb-2"
              >
                Radio Repair
              </Button>
              <Button
                onClick={() => setScreen("accessories")}
                className="w-full"
              >
                Accessories
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      )}

      {screen === "batterySwap" && (
        <Card className="w-full max-w-md p-6 text-center">
          <CardContent>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-xl font-bold mb-4">Battery Swap</h1>
              <Input
                placeholder="Scan or enter Radio ID"
                value={radioSerial}
                onChange={(e) => setRadioSerial(e.target.value)}
                className="mb-4"
              />
              <Input
                placeholder="Scan or enter Battery ID"
                value={batteryId}
                onChange={(e) => setBatteryId(e.target.value)}
                className="mb-4"
              />
              <Button onClick={handleSwapConfirm} className="w-full">
                Confirm Swap
              </Button>
              {status === "success" && (
                <p className="text-green-500 mt-2">Swap Successful!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 mt-2">Please enter valid IDs</p>
              )}
              <Button onClick={() => setScreen("home")} className="w-full mt-2">
                Cancel
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
