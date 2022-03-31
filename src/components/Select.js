import React from "react";

function Select({ options, inputHandler, label }) {
  return (
    <div className="inputContainer">
      <label htmlFor="">{label}</label>
      <select label={"Country"} options={options} inputHandler={inputHandler}>
        <option value=""></option>
        {options.map((country) => (
          <option value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
