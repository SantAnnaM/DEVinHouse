import React from 'react';
import { Container } from './Container';
import { ModalBody } from './Container';


export const Modal = ({status, setStatus, children}) => {

  const handleModalClick = (e) => {
    if(e.target.classList.contains('modalBg')) {
      setStatus(false);
    }
  }

  return (
      <Container 
        className='modalBg'
        status={status} 
        onClick={handleModalClick}
      >
        <ModalBody> {children} </ModalBody>

      </Container>
  )
}
