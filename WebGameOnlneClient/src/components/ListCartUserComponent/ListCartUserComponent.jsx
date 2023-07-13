import React from "react";
import "./ListCartUserComponent.css";
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsArrowLeftCircleFill,
  BsFillTrashFill
} from "react-icons/bs";
import { Link } from "react-router-dom";
const ListCartUserComponent = () => {
  return (
    <div className="ListCartUserComponent">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/img/pubg.jpg" alt="" />
            </td>
            <td>$19.99</td>
            <td>
              <BsFillCaretLeftFill />1<BsFillCaretRightFill />
            </td>
            <td>$19.99</td>
            <td><BsFillTrashFill/></td>
          </tr>
        </tbody>
      </table>
      <Link to={"/"} className="back-product">
        <BsArrowLeftCircleFill />
        <p>Store</p>
      </Link>
      <div className="box-infor">
        <form action="">
          <h1>Billing Information</h1>
          <input type="text" placeholder="First and last name" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Your mail" />
        </form>
      </div>
    </div>
  );
};

export default ListCartUserComponent;
