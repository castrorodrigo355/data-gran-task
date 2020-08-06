import React from "react";
import { NavLink } from "react-router-dom";
import "./route.css";

export const Route = ({ url, description }) => {
  return (
    <div className="navbar--main--container-item">
      <NavLink to={url}>{description}</NavLink>
    </div>
  );
};
