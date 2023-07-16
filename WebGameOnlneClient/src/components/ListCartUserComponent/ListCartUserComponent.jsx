import React, { useEffect, useState } from "react";
import "./ListCartUserComponent.css";
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsArrowLeftCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

const ListCartUserComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartUpdated, setIsCartUpdated] = useState(true);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  // console.log(11111, cartItems); // log thử xem có danh sách game trong cart hay ko

  useEffect(() => {
    fetchCartItems();
  }, [isCartUpdated]);
  // lấy api để lấy danh sách game có trong cart
  const fetchCartItems = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("userLogin"));
      const userId = user.data.idUser;
      const response = await axios.get(
        `http://localhost:3000/api/v1/cart-user/${userId}`
      );

      if (response.status === 200) {
        const items = response.data.data;
        setCartItems(items);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // lấy api để xoá sẳn phẩm có trong cart
  const deleteCartItem = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/cart/${cartItemId}`);
      setIsCartUpdated(!isCartUpdated);
    } catch (error) {
      console.error(error);
    }
  };

  // tính tổng giá tiền
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item.price);
      if (!isNaN(itemPrice)) {
        totalPrice += itemPrice;
      }
    });
    return totalPrice.toFixed(2);
  };


  // Xử lý khi người dùng thay đổi giá trị ô input
  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
    console.log(1111,event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(2222,event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(3333,event.target.value);
  };

  // Xử lý khi người dùng nhấn nút "Buy Now"
  const handleSubmit = (event) => {
    event.preventDefault();

    // Lấy giá trị từ các ô input
    const formData = {
      fullname,
      phone,
      email,
    };

  };







  return (
    <div className="ListCartUserComponent">
      <h1 className="Listcart">List Game Cart</h1>
      <table>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.url} alt="Game" />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <p
                  className="delete"
                  onClick={() => deleteCartItem(item.idCart)}
                >
                  <BsFillTrashFill />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
        <p className="total">Total: ${calculateTotalPrice()}</p>
      </table>
      <Link to={"/"} className="back-product">
        <BsArrowLeftCircleFill />
        <p>Store</p>
      </Link>
      <div className="box-infor">
        <form action="" onSubmit={handleSubmit}>
          <h1>Billing Information</h1>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={handleFullnameChange}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="text"
            className="mail"
            id="mail"
            placeholder="Your Mail"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Buy Now</button>
        </form>
      </div>
    </div>
  );
};

export default ListCartUserComponent;
