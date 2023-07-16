import React from "react";
import "./NavBarUserComponent.css"
import {
  BsFillGiftFill,
  BsHeartFill,
  BsFillShieldFill,
  BsFillBinocularsFill,
  BsFillCassetteFill,
  BsFillFlagFill,
  BsFillLightningFill,
  
  BsBoxFill
} from "react-icons/bs";
import { Link } from "react-router-dom";
const NavBarUserComponent = () => {
  return (
    <div className="navbar-all">
      <div className="nav-bar">
        <h1>Filters</h1>
        
        <Link className="Filters">
          <BsHeartFill />
          <p>All Game</p>
        </Link>
        {/* Genres */}
        <h1>Genres</h1>
        <Link className="Genres">
          <BsBoxFill />
          <p>Action</p>
        </Link>
        <Link className="Genres">
            <BsFillShieldFill/>
          <p>Strategy</p>
        </Link>
        <Link className="Genres">
            <BsFillBinocularsFill/>
          <p>RPG</p>
        </Link>
        <Link className="Genres">
            <BsFillCassetteFill/>
          <p>Shooter</p>
        </Link>
        <Link className="Genres">
            <BsFillFlagFill/>
          <p>Puzzle</p>
        </Link>
        <Link className="Genres">
            <BsFillLightningFill/>
          <p>Racing</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBarUserComponent;
