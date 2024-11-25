import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 16px;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const ProductImage = styled.img`
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  filter: grayscale(100%);
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: 0.4s all;

  &:hover {
    cursor: pointer;
    filter: grayscale(0);
    border: 1px solid rgba(124, 124, 124, 0.8);
    background-color: rgba(185, 185, 185, 0.5);
    transform: scale(1.05) rotate(-0.5deg);
  }
`;

const ProductItem = (props) => {
  return (
    <Item>
      <ProductImage
        src={props.src}
        alt="Product"
        height={props.height}
        width={props.width}
        borderRadius={props.borderRadius}
      />
    </Item>
  );
};

export default ProductItem;
