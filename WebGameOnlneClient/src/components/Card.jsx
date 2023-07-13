import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import Loading from "./Loading";
import "./Card.css";

const Card = ({ products }) => {
  const [loading, setLoading] = useState(true); // tao state set loading lan dau la true
  const [mainData, setMainData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  useEffect(() => {
    axiosClient({
      url: "api/v1/products",
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        setMainData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [isUpdate]);

  const handleSubmit = () => {
    setLoading(true);
    axiosClient({
      url: "api/v1/products",
      method: "GET",
    })
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    axiosClient({
      url: `api/v1/products/${id}`,
      method: "DELETE",
    })
      .then((response) => {
        setIsUpdate(!isUpdate);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="card">
      {loading && <Loading />}
      <ul className="list-card">
        {mainData?.map((item) => (
          <li className="liItem" key={item.id}>
            <div className="wrapper-card1 wrapper-card">
              <div className="header-card">
                <p className="name-product">{item.title}</p>
                <div className="img">
                  <img
                    src={
                      item.imageUrl ||
                      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt07d62336ee8ed926/6214ab2690aa357658b8e4cc/18-maguire.jpg"
                    }
                  />
                </div>
                <b>{item.price}$</b>
                <div className="wrapper-desc">
                  <p title={item.description} className="description">
                    {item.description}
                  </p>
                </div>
                <div className="group-btn">
                  {products == "2nut" ? (
                    <span className="group-btn">
                      <button>Edit</button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </span>
                  ) : (
                    <button>Add to cart</button>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
