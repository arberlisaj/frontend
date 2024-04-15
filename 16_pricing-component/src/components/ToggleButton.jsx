import React from "react";

const ToggleButton = ({ checked, setChecked }) => {
  return (
    <label className="switch">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleButton;
