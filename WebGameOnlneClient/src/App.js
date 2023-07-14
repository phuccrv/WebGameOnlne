import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Auth from "./pages/Auth/Auth";
import LoginUserComponent from "./components/LoginUserComponent/LoginUserComponent";
import RegisterUserComponent from "./components/RegisterUserComponent/RegisterUserComponent";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<LoginUserComponent />}></Route>
          <Route path="register" element={<RegisterUserComponent />}></Route>
        </Route>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
