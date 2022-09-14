import React from "react";
import {  Container,
          ProductArea,
          ProductPhoto,
          ProductInfoArea,
          ProductDetails,
          ProductButton,
          ProductQuantityArea} from "./Container";

export const ModalProduct = ({data}) => {

  return (
    <Container>
      <ProductArea>

        <ProductPhoto src={data.img} />
        <ProductInfoArea>

          <ProductDetails>
            <h1>{data.name}</h1> <br></br> <br></br>
            <h2>{data.description}</h2>
          
          </ProductDetails>
          <ProductQuantityArea>
            <h3>Preço {data.price} </h3>
          
          </ProductQuantityArea>
          
        </ProductInfoArea>

      </ProductArea>
      <ProductButton></ProductButton>
    </Container>
  )
};