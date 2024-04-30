import React from "react";

export default function CheckBox({ children, disabled, checked, onChange }) {
  return (
    <label className="check_label">
      <input
        className="check_input"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}
