import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function AccessoryUI() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h1>Radio Ticket Tracker</h1>
      <Button text="Battery" onClick={() => navigate("/battery")} />
      <Button text="Radio" onClick={() => navigate("/radio")} />
      <Button text="Accessories" onClick={() => navigate("/accessories")} />
    </div>
  );
}
