import React from "react";
import "./HeaderUserComponent.css";
import { BsBagHeartFill, BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom"
const HeaderUserComponent = () => {
  return (
    <div className="header-page">
      <header className="headerHome">
        <div className="header-life">
          <img src="/logogame.png" alt="" />
          <p>Game Store</p>
          <input
            type="text"
            name="game"
            id="game"
            placeholder="Enter game..."
          />
        </div>
        <div className="header-right">
          <button><Link to={"/auth/login"}>LogIn</Link></button>
          <BsFillPersonFill />
          <p>Phúc nguyễn</p>
          <BsBagHeartFill />
          <p>Cart:</p>
        </div>
      </header>
    </div>
  );
};

export default HeaderUserComponent;
