import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      <div className="container">
        <ul className="list-header">
          <li
            className={
              location.pathname == "/" ? "item-header active" : "item-header"
            }
          >
            <Link to="/">Shop</Link>
          </li>
          <li
            className={
              location.pathname == "/products"
                ? "item-header active"
                : "item-header"
            }
          >
            <Link to="/products">Products</Link>
          </li>
          <li
            className={
              location.pathname == "/carts"
                ? "item-header active"
                : "item-header"
            }
          >
            <Link to="/carts">Carts</Link>
          </li>
          <li
            className={
              location.pathname == "/orders"
                ? "item-header active"
                : "item-header"
            }
          >
            <Link to="/orders">Orders</Link>
          </li>
          <li
            className={
              location.pathname == "/add-product"
                ? "item-header active"
                : "item-header"
            }
          >
            <Link to="/add-product">Add Products</Link>
          </li>
          <li className="item-header">
            <Link>Admin Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
