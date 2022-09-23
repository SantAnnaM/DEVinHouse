import React from 'react';
import { 
    Container, 
    ContainerDiv,
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
import SubCategoria from "../../SubCategoria";

import cardapio from '../../../assets/dados/cardapio.json';
import categorias from '../../../assets/dados/categorias.json';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';


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
                    <ContainerDiv>
                        <CategoryItem 
                            data={{
                                id:0, 
                                categoria:'Todas as categorias',    
                                
                                subcategoria:['todos']
                            }}
                            subcat={['todos']} 
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            /> 
                            {categorias.map((item, index)=>(
                                
                                    <CategoryItem 
                                        key={index} 
                                        data={item}
                                        subcat={item.subcategoria}
                                        activeCategory={activeCategory}
                                        setActiveCategory={setActiveCategory}
                                    />
                                
                            ))}     
                    </ContainerDiv>
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