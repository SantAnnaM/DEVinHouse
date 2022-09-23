import styled from 'styled-components';

export const Container = styled.div`
  width:190px;
  height:120px;
  background-color: ${props=>props.active == props.id ? '#fff' : '#d7dbd5'};
  border:solid 2px #00ff00;
  border-radius:20px;
  margin-right:30px;
  cursor: pointer;
  padding-left:20px;
  
`;

