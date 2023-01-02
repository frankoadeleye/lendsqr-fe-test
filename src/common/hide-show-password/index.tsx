import React from "react";
import "./styled.scss";

const HideShowPassword = ({ onToggle, condition }) => {
  return (
    <div onClick={onToggle} className="hide-show">
      <div className="hide-show__icon">{condition ? "Hide" : "Show"}</div>
    </div>
  );
};

export default HideShowPassword;
