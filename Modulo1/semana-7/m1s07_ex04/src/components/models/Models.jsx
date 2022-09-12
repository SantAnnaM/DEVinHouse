import '/src/components/models/models.css';

export const Models = ({pizza}) => { 
            
        /*    props.map((pizza, index) => { */ 
            
            return (
                    
                <div className='pizza-item'>
                    <a href=""> 
                        <div> 
                            <img  className='pizza-item--img img' src={pizza.img} alt="Tipo Pizza" />
                        </div>
                        <div className='pizza-item--add'>+</div>
                    </a>
                    <div className='pizza-item--price'>{`R$ ${pizza.price.toFixed(2)}`}</div>
                    <div className='pizza-item--name'>{pizza.name}</div>
                    <div className='pizza-item--desc'>{pizza.description}</div>
                    <div> 
                        <span>{pizza.sizes[0]}  </span>
                        <span>{pizza.sizes[1]}  </span>
                        <span>{pizza.sizes[2]}  </span>
                    </div>
                </div>
                );
    };