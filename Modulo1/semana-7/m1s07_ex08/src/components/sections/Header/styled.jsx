import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  padding:5px;
  border-radius: 10px;
  background-color: #136713;
  `;

  export const Logo = styled.img`
    width: auto;
    height:70px;
  `;

  export const SearchInput = styled.input`
    border:0;
    border-radius:25px;
    width:300px;
    height:50px;
    background-image: url('/src/assets/image/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    outline:0;
    padding-left:50px;
    cursor:text;
    font-size:15px;
  `;