import React, { useState, useEffect } from "react";
import ArrowDown from "./Trazado 26.svg";
import cleanIcon from "./Grupo 4187.svg";
import "./simpleSelect.css";

export const SimpleSelect = ({
  title,
  options,
  selection,
  setSelection,
  placeholderSelection,
  disabled
}) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [options2, setOptions2] = useState([]);

  useEffect(() => {
    setOptions2(options);
  }, [options]);

  return (
    <div
      className={`select--simple--container ${
        disabled ? "disabled--select" : ""
      }`}
      onMouseLeave={() => setOpenSelect(false)}
    >
      <div className="select--simple--container--title">{title}</div>

      <button
        className="select--simple--container--button"
        onClick={() => setOpenSelect(x => !x)}
      >
        <div className="select--simple--container--button--description">
          {!selection
            ? placeholderSelection
            : selection.description + " - " + selection.value}
        </div>
        <div className="select--simple--container--button--arrow--icon">
          <ArrowDirection open={openSelect} />
        </div>
      </button>

      <div
        className={`select--simple--container--options ${
          openSelect ? "open--ssc--options" : ""
        }`}
      >
        {options2 &&
          options2.map((opt, i) => {
            return (
              <div
                className="select--simple--container--options--item"
                key={i}
                onClick={() => {
                  setSelection(opt);
                  setOpenSelect(false);
                }}
              >
                {"User N: " + opt.value + " - " + opt.description}
              </div>
            );
          })}
      </div>

      <div
        className={`select--simple--container--clean--icon ${
          selection ? "show-clean" : ""
        }`}
        onClick={() => setSelection(null)}
      >
        <img src={cleanIcon} alt="..." />
      </div>
    </div>
  );
};

const ArrowDirection = ({ open }) => (
  <img className={open ? "arrow-invert" : ""} src={ArrowDown} alt="..." />
);
