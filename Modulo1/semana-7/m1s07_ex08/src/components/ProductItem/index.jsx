import React from "react";
import { 
      Container,
      ProductPhotoArea,
      ProductInfoArea,
      ProductButtonArea,
      ProductPhoto,
      ProductName,
      ProductPrice,
      ProductDescription,
      ProductButton
      } from './styled';

export default ({data}) => {

  return (
    <Container>
      <ProductPhotoArea>
        <ProductPhoto src={data.img} />

      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName> {data.name} </ProductName>
        <ProductPrice> R$ {data.price} </ProductPrice>
        <ProductDescription> {data.description} </ProductDescription>

      </ProductInfoArea>
      <ProductButtonArea></ProductButtonArea>
        <ProductButton src='/src/assets/image/next.png' />
    </Container>

  )
}