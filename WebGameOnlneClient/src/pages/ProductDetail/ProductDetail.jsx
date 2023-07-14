import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { BsArrowLeftCircleFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import HeaderUserComponent from "../../components/HeaderUserComponent/HeaderUserComponent";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    try {
      const response = await axios(`http://localhost:3000/api/v1/product/${id}`);
      setGame(response.data.data);
      console.log(1111,response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ProductDetail">
      {/* header */}
      <HeaderUserComponent />
      <div className="back-and-name">
        <Link to={"/"} className="back">
          <BsArrowLeftCircleFill />
          <p>Store</p>
        </Link>
        <div className="name-game">{game?.title}</div>
      </div>
      <div className="infor-game">
        <div className="img-game">
          <img src={game?.url} alt={game?.title} />
        </div>
        <div className="infor-title">
          <h2>About</h2>
          <p>{game?.description}</p>
          <div className="price">
            <p>${game?.price}</p>
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
