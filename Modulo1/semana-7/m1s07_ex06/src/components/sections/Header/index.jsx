import React from 'react';
import { Container, Logo, SearchInput } from './styled';

export default () => {

  const handleInputFocus = () => {

  }

  const handleInputBlur = () => {

  }

  return (
    <Container>
        <Logo src="../src/assets/image/logo.png" />
        <SearchInput 
              type="text" 
              placeholder="Digite um produto..." 
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              />
    </Container>
  )
};