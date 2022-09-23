import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  padding: 10px;
  `;
  export const ContainerDiv = styled.div`
  width:100%;
  padding: 10px;
  border:solid 2px #ff0000;
  display:flex;
  justify-content:center;
  `;

export const CategoryArea = styled.div`
  color: #9b1414;
  margin-top:20px;
`;

export const CategoryList = styled.div`
  display:flex;
  margin-top:10px;
`;

export const ProductArea = styled.div`
  color: #9b1414;
  margin-top:20px;
  margin-bottom:10px;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const ProductPaginationArea = styled.div`

`;

export const ProductPaginationItem = styled.div`

`;