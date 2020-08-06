import React from "react";
import "./customButton.css";

const STYLES = ["btn--primary", "btn--secondary", "btn--third"];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

export const CustomButton = ({
  children,
  onClick,
  type,
  buttonStyle,
  buttonSize,
  disabled
}) => {
  const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkDisabled = disabled ? "unavailable" : "";

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`btn ${btnStyle} ${btnSize} ${checkDisabled}`}
    >
      {children}
    </button>
  );
};
