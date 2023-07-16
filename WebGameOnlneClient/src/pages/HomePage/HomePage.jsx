import React, { useState } from "react";
import "./HomePage.css";
import HeaderUserComponent from "../../components/HeaderUserComponent/HeaderUserComponent";
import NavBarUserComponent from "../../components/NavBarUserComponent/NavBarUserComponent";
import ProductUserComponent from "../../components/ProductUserComponent/ProductUserComponent";
import FooterUserComponent from "../../components/FooterUserComponent/FooterUserComponent";

const HomePage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isUpdate, setIsUpdate] = useState(true);
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleUpdateCount = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <div style={{ backgroundColor: "#1e272e" }}>
      <HeaderUserComponent isUpdate={isUpdate} onSearch={handleSearch} />
      <div className="layout-product">
        <NavBarUserComponent />
        <ProductUserComponent
          searchKeyword={searchKeyword}
          handleUpdateCount={handleUpdateCount}
        />
      </div>
      <FooterUserComponent />
    </div>
  );
};

export default HomePage;
