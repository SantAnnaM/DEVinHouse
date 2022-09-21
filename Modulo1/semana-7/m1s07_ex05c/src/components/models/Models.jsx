import styled from 'styled-components';
import '/src/components/models/models.css';

const mostraDetalhe = (e) => {
    e.preventDefault();
    return;
};

export const Models = ({data}) => { 
    console.log('1', data);
    
    return (
        <div className='pizza-item'>
            <a href='' onClick={(e) => mostraDetalhe(e)}> 
                <div> 
                    <img  className='pizza-item--img img' src={data.img} alt="Tipo Pizza" />
                </div>
                <div className='pizza-item--add'>+</div>
            </a>
            <div className='pizza-item--price'>{`R$ `}</div>
            <div className='pizza-item--name'>{data.name}</div>
            <div className='pizza-item--desc'>{data.description}</div>
            <div> 
                <span>{data.sizes[0]}  </span>
                <span>{data.sizes[1]}  </span>
                <span>{data.sizes[2]}  </span>
            </div>
        </div>
        ) /* Fim return */
    }; /* Fim arrow */
