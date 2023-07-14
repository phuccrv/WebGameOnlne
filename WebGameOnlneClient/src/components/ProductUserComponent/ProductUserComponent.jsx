import React, { useEffect, useState } from "react";
import "./ProductUserComponent.css";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductUserComponent = ({ searchKeyword }) => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  // useEffect(() => {
  //   filterGames();
  // }, [searchKeyword]);

  const fetchGames = async () => {
    try {
      const response = await axios("http://localhost:3000/api/v1/product/");
      setFilteredGames(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const filterGames = () => {
  //   if (searchKeyword.trim() === "") {
  //     setFilteredGames(games);
  //   } else {
  //     const filtered = games.filter((game) =>
  //       game?.title.toLowerCase().includes(searchKeyword.toLowerCase().trim())
  //     );
  //     setFilteredGames(filtered);
  //   }
  // };

  return (
    <div>
      <div className="content-title">
        <h1>Rending and interesting</h1>
        <p>Based on player counts and ratings</p>
      </div>

      {/* box-item phần danh sách sản phẩm */}
      <div className="list-product">
        {filteredGames.map((game) => (
          <div className="box-item" key={game.id}>
            <Link to={`/product/${game.id}`}>
              <img src={game.url} alt="" />
              <div className="box-dow">
                <div className="box-title">
                  <p>
                    Add to cart <BsPlusCircle />
                  </p>
                  <p>${game.price}</p>
                </div>
                <div className="title-dow">
                  <p>{game?.title}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductUserComponent;
