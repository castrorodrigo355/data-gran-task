import React from "react";
import { routes } from "../../constants/navbarData/navbarData";
import { Route } from "../../components/route/route";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar--main--container">
      {routes.map(({ id, url, description }) => (
        <Route key={id} url={url} description={description} />
      ))}
    </div>
  );
};
