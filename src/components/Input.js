import React from "react";

function Input({ label, value, inputHandler }) {
  return (
    <div className="inputContainer">
      <label htmlFor="">{label}</label>
      <input
        name={label}
        value={value}
        onChange={inputHandler}
        defaultValue=""
      />
    </div>
  );
}

export default Input;
