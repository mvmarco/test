import React from 'react'

function Button({onClick, name}) {
  return (
    <div
      className="button"
      onClick={onClick}
      style={
        name === "Next"
          ? { backgroundColor: "#1a514e", color: "white" }
          : { backgroundColor: "white" }
      }
    >
      {name}
    </div>
  );
}

export default Button