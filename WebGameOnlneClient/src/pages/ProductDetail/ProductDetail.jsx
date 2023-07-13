import React from "react";
import "./ProductDetail.css";
import { BsArrowLeftCircleFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import HeaderUserComponent from "../../components/HeaderUserComponent/HeaderUserComponent";
import FooterUserComponent from "../../components/FooterUserComponent/FooterUserComponent";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  return (
    <div className="ProductDetail">
      {/* header */}
      <HeaderUserComponent />

      <div className="back-and-name">
        <Link to={"/"} className="back">
          <BsArrowLeftCircleFill />
          <p>Store</p>
        </Link>
        <div className="name-game">The Witcher 3: Wild Hunt</div>
      </div>
      <div className="infor-game">
        <div className="img-game">
          <img src="/img/pubg.jpg" alt="" />
        </div>
        <div className="infor-title">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            sunt sequi quaerat debitis illum eligendi, quo praesentium quos
            cumque nisi nostrum quidem! Distinctio laborum quisquam ducimus esse
            fuga nulla dolores! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Accusamus sunt sequi quaerat debitis illum
            eligendi, quo praesentium quos cumque nisi nostrum quidem!
            Distinctio laborum quisquam ducimus esse fuga nulla dolores!
          </p>
          <div className="price">
            <p>$19.99</p>
            <Link to={"/"}>
              Add to cart <BsFillBookmarkPlusFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
