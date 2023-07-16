import React, { useEffect, useState } from "react";
import "./ProductUserComponent.css";
import { BsCheckCircle, BsPlusCircle,BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const ProductUserComponent = ({ searchKeyword,handleUpdateCount }) => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios("http://localhost:3000/api/v1/product/");
      setFilteredGames(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // lấy api
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const addToCart = async (gameId) => {
    try {
      const userId = user.data.idUser;
      const response = await axios.post(
        "http://localhost:3000/api/v1/cart",
        {
          gameId: gameId,
          userId: userId,
        }
      );
      if (response.status === 200) {
        setCartItems([...cartItems, gameId]);
        handleUpdateCount()
        toast.success(' add to public ^.^', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    } catch (error) {
      console.error(error);
      toast.warn('already in cart:)', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    setAddedToCart((prevAddedToCart) => [...prevAddedToCart, gameId]);
  };

  // kiểm tra đã thêm vào giỏ hàng hay chưa
  const isAddedToCart = (gameId) => {
    return addedToCart.includes(gameId);
    
  };
  return (
    <div className="product-Page">
      <div className="content-title">
        <h1>Rending and interesting</h1>
        <p>Based on player counts and ratings</p>
      </div>

      <div className="list-product">
        {filteredGames.map((game) => (
          <div className="box-item" key={game.idGame}>
            <Link to={`/product/${game.idGame}`}>
              <img src={game.url} alt="" />
            </Link>
            <div className="box-dow">
              <div className="box-title">
                {isAddedToCart(game.idGame) ? (
                  <p style={{ color: "#f39c12" }}>
                    Added to cart <BsCheckCircle />
                  </p>
                ) : (
                  <p onClick={() => addToCart(game.idGame)}>
                    Add to cart <BsPlusCircle />
                  </p>
                )}
                <p>${game.price}</p>
              </div>
              <div className="title-dow">
                <p>{game?.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductUserComponent;
