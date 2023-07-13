import React from "react";
import "./HeaderUserComponent.css";
import { BsBagHeartFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const HeaderUserComponent = () => {
  const userJson = localStorage.getItem("userLogin");
  console.log(1111,userJson);
  const user = JSON.parse(userJson);
  const username = user ? user.data.username : null;

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
  };

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
        {user ? (
            <>
              <button onClick={handleLogout}><Link to={"/auth/login"}>Logout</Link></button>
              <BsFillPersonFill />
              <p>{username}</p>
            </>
          ) : (
            <>
              <button>
                <Link to={"/auth/login"}>Login</Link>
              </button>
            </>
          )}
          <BsBagHeartFill />
          <p>Cart:</p>
        </div>
      </header>
    </div>
  );
};

export default HeaderUserComponent;
