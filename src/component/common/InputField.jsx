import React from "react";

export default function InputField({
  label,
  type,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="input-group">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required={required}
      />
      <label className={required ? "required" : ""}>{label}</label>
    </div>
  );
}
