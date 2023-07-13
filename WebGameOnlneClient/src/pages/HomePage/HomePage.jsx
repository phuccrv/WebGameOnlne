import React from "react";
import "./HomePage.css"
import HeaderUserComponent from "../../components/HeaderUserComponent/HeaderUserComponent";
import NavBarUserComponent from "../../components/NavBarUserComponent/NavBarUserComponent";
import ProductUserComponent from "../../components/ProductUserComponent/ProductUserComponent";
import FooterUserComponent from "../../components/FooterUserComponent/FooterUserComponent";

const HomePage = () => {
  return <div style={{ backgroundColor: "#1e272e" }}>
    <HeaderUserComponent/>
    <div className="layout-product">
        <NavBarUserComponent/>
        <ProductUserComponent/>
    </div>
    <FooterUserComponent/>
  </div>;
};

export default HomePage;
