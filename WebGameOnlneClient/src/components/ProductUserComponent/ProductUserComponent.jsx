import React, { useEffect, useState } from "react";
import "./ProductUserComponent.css";
import { BsPlusCircle } from "react-icons/bs";
const ProductUserComponent = () => {
  const [games, setGames] = useState([]);
  console.log(111, games.data);
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/v1/product/");
      const data = await response.json();
      setGames(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="content-title">
        <h1>Rending and interesting</h1>
        <p>Based on player counts and ratings</p>
      </div>

      {/* box-item phần danh sách sản phẩm */}
      <div className="list-product">
        {games?.map((game) => (
          <div className="box-item">
            <img src={game.url} alt="" />
            <div className="box-dow">
              <div className="box-title">
                <p>
                  Add to cart <BsPlusCircle />
                </p>
                <p>${game.price}</p>
              </div>
              <div className="title-dow">
                <p>{game.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductUserComponent;
