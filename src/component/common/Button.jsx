import React from "react";

export default function Button({ text, onClick, type = "primary" }) {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
    </button>
  );
}
