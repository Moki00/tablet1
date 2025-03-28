import React from "react";

const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default Input;
