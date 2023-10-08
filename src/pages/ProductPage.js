import React from "react";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";
import Header from "../components/header/Header";
import Product from "../components/product/Product";



const ProductPage =() => {
    return(
        <div className="layout">
            <Navbar />
            <div>
                <Header />
                <Product />
            </div>
        </div>
    )
}

export default ProductPage;