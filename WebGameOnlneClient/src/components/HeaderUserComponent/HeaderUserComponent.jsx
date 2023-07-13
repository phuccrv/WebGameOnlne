import React, { useState } from "react";
import "./HeaderUserComponent.css";
import { BsSearchHeart, BsBagHeartFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderUserComponent = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    onSearch(searchKeyword);
  };

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
  };

  const userJson = localStorage.getItem("userLogin");
  const user = JSON.parse(userJson);
  const username = user ? user.data.username : null;

  return (
    <div className="header-page">
      <header className="headerHome">
        <div className="header-life">
          <img src="/logogame.png" alt="" />
          <p>Game Store</p>
          <div className="search-container">
            <input
              type="text"
              name="game"
              id="game"
              placeholder="Enter game..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <p onClick={handleSearch}>
              <BsSearchHeart />
            </p>
          </div>
        </div>
        <div className="header-right">
          {user ? (
            <>
              <button onClick={handleLogout}>
                <Link to={"/auth/login"}>Logout</Link>
              </button>
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
