import React from "react";

import { Container} from './styled';
import  SubCategoria  from '../SubCategoria';


export default ({data, subcat, activeCategory, setActiveCategory}) => {

    const handleCategoryClick = () => {
      setActiveCategory(data.id)
    }

  return(
        <Container 
              active={activeCategory} 
              id={data.id}
              onClick={handleCategoryClick}
        >
              <h4> {data.categoria} </h4>

              {subcat.map((item,index)=>(

                  <SubCategoria 
                        key={index} 
                        subcat={item} 
                        active={activeCategory} 
                        id={data.id} 
                  />
              ))}

        </Container>
  );
}