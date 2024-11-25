import React from "react";
import styled from "styled-components";
import LaptopImg from "/src/assets/HomePage/Laptop.jpg";
import ProductList from "./Inner-Components/Products/ProductList";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 530px;

  .h_t {
    display: flex;
    flex-direction: column;
  }

  .h_t h1 {
    font-size: 42px;
  }

  .h_t p {
    font-size: 32px;
  }

  .h_t .btns {
    display: flex;
    gap: 13px;
    margin-top: 13px;
  }

  .h_t .btns button {
    height: 40px;
    width: 110px;
    background-color: black;
    color: white;
    border-radius: 10px;
  }

  .h_t .btns button:hover {
    cursor: pointer;
    background-color: #111;
  }

  img {
    width: 420px;
    flex-shrink: 0;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .h_t {
      align-items: center;
    }

    img {
      width: 80%;
      margin: 0 auto;
    }

    .h_t h1 {
      font-size: 32px;
    }

    .h_t p {
      font-size: 24px;
    }
  }

  @media (max-width: 1000px) and (orientation: landscape) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 13px;

    .h_t {
      align-items: flex-start;
      text-align: left;
    }

    img {
      width: 35%;
      height: auto;
    }

    .h_t h1 {
      font-size: 26px;
    }

    .h_t p {
      font-size: 20px;
    }

    .h_t .btns {
      gap: 8px;
      margin-top: 8px;
    }

    .h_t .btns button {
      width: 100px;
      height: 35px;
      border-radius: 10px;
      font-size: small;
    }
  }
`;

const Home = () => {
  return (
    <>
      <HeroContainer>
        <div className="h_t">
          <h1>TechNest</h1>
          <p>Nest Your Tech, Elevate Your Life</p>
          <div className="btns">
            <button aria-label="See TechNest Products">See Products</button>
            <button aria-label="Learn More About TechNest">Learn More</button>
          </div>
        </div>
        <img
          src={LaptopImg}
          alt="A sleek laptop showcasing TechNest products"
          id="LaptopImg"
        />
      </HeroContainer>
      <ProductList />
    </>
  );
};

export default Home;
