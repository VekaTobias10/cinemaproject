import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [style, setStyle] = useState("button_navbar");

  const changeStyle = () => {
    console.log("you just clicked");
    setStyle("change");
  };

  return (
    <div>
      <div className={style} onClick={changeStyle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className="nav_container">
        <ul className="nav_block">
          <li className="nav_item">
            <Link className="link_nav" to="/">
              Home
            </Link>
          </li>
          <li className="nav_item">
            <Link className="link_nav" to="/Movies">
              Movies
            </Link>
          </li>
          <li className="nav_item">
            <Link className="link_nav" to="/Characters">
              Characters
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
