import React from "react";
import { Container } from './styled';

export default ({subcat, active, id}) => {
      
  return(

      <Container>
        
        {active == id ?   <li> {subcat} </li> :  <> </>}

      </Container>
      
  );
}