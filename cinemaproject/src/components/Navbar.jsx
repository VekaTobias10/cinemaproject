import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () =>{

    return(
        <div>
        <nav className="nav_container">
          <ul className="nav_block">
            <li className="nav_item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav_item">
              <Link to="/Movies">Movies</Link>
            </li>
            <li className="nav_item">
              <Link to="/Characters">Characters</Link>
            </li>
          </ul>
        </nav>
        </div>
    );


};