import React from 'react';
import { 
    Container, 
    CategoryArea, 
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem } 
    from './styled';

import Header from '../Header';
import CategoryItem from '../../CategoryItem';
import ProductItem from '../../ProductItem';

import cardapio from '../../../assets/dados/cardapio.json';
import categorias from '../../../assets/dados/categorias.json';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { array } from 'prop-types';

export default () => {
    
    
    const [itensCardapio, setItensCardapio] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setActivePage] = useState(0);
    

    useEffect(()=>{
        }, [activeCategory]);

        ReactTooltip.rebuild();

    return (
        <Container>
            <Header />
            <CategoryArea>
                Selecione uma categoria ({activeCategory})
                <CategoryList>
                    <CategoryItem 
                        data={{
                            id:0, 
                            categoria:'Todas as categorias',    
                            img:'/src/assets/image/catTodos.png'
                        }}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        /> 
                        {categorias.map((item, index)=>(
                            <CategoryItem 
                                key={index} 
                                data={item} 
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                </CategoryList>    
            </CategoryArea> 
                <ProductArea>
                    <ProductList>
                        {cardapio.map((item, index)=>(
                                <ProductItem 
                                    key={index} 
                                    data={item} 
                                    activeCategory={activeCategory}
                                    setActiveCategory={setActiveCategory}
                                />
                            ))}
                    </ProductList>
                </ProductArea>
            <ProductPaginationArea>
                {Array(totalPages).fill(0).map((item, index)=>(
                    <ProductPaginationItem key={index}>
                        {index + 1}

                    </ProductPaginationItem>
                ))}
            </ProductPaginationArea>                
        </Container>
    );
}