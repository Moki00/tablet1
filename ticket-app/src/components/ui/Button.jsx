import React from "react";

const Button = ({ text, onClick, type = "button", color = "blue" }) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
