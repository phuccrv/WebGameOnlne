import React, { useState } from "react";
import "./HomePage.css";
import HeaderUserComponent from "../../components/HeaderUserComponent/HeaderUserComponent";
import NavBarUserComponent from "../../components/NavBarUserComponent/NavBarUserComponent";
import ProductUserComponent from "../../components/ProductUserComponent/ProductUserComponent";
import FooterUserComponent from "../../components/FooterUserComponent/FooterUserComponent";

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div style={{ backgroundColor: "#1e272e" }}>
      <HeaderUserComponent onSearch={handleSearch} />
      <div className="layout-product">
        <NavBarUserComponent />
        <ProductUserComponent searchKeyword={searchKeyword} />
      </div>
      <FooterUserComponent />
    </div>
  );
};

export default HomePage;
