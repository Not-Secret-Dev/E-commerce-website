import React from "react";
import styled from "styled-components";
import ProductItem from "../ProductItem";
import AppleProductsImg from "/src/assets/HomePage/Apple-Products.png";
import CameraImg from "/src/assets/HomePage/Cameras.png";
import BinocularsImg from "/src/assets/HomePage/Binocullars.png";
import ModularPcImg from "/src/assets/HomePage/Modular_PC.png";
import ScientficCalcImg from "/src/assets/HomePage/Scientific-Calculator.png";

const MainContainer = styled.div`
  height: 610px;
  background-color: #ebeff3;

  .header {
    text-align: center;
    background-color: black;
    color: white;
    padding: 12px;
    margin-bottom: 45px;
    font-size: 24px;
    font-weight: bold;
  }

  .products {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 20px;
    align-items: start;

    .big-img {
      width: 100%;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto); 
      gap: 20px;
    }
  }
`;


const ProductList = () => {
  return (
    <MainContainer>
      <h2 className="header">Featured Products</h2>
      <div className="products">
        <div className="big-img">
          <ProductItem src={ModularPcImg} height="430px" borderRadius="10px" />
        </div>
        <div className="grid">
          <ProductItem
            className="ProductItem"
            src={AppleProductsImg}
            height="180px"
            borderRadius="10px"
          />
          <ProductItem className="ProductItem" src={CameraImg} height="180px" />
          <ProductItem
            className="ProductItem"
            src={BinocularsImg}
            width="190px"
            height="180px"
            borderRadius="10px"
          />
          <ProductItem
            className="ProductItem"
            src={ScientficCalcImg}
            width="200px"
            height="180px"
            borderRadius="10px"
          />
          <ProductItem
            className="ProductItem"
            src={AppleProductsImg}
            height="180px"
            borderRadius="10px"
          />
          <ProductItem className="ProductItem" src={CameraImg} height="180px" />
        </div>
      </div>
    </MainContainer>
  );
};

export default ProductList;
