import { Models } from '../models/Models';
import { Detalhe } from '../detalhe/Detalhe';
import '/src/components/main/main.css';
import { Modal } from '../modal/Modal';
import { useState } from 'react';
import { ModalProduct } from '../modalProduct/ModalProduct';

const tiposPizzas = [
  {id:1, name:'Frango com Quatro Queijos', img:'/src/assets/image/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Queijo, Cream-cheese, frango grelhado, gorgonzola, parmesão e azeite.'},
  {id:2, name:'Calabresa', img:'/src/assets/image/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Queijo, calabresa e cebola, oregano'},
  {id:3, name:'3 Queijos', img:'/src/assets/image/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Queijo, requeijão, oregano e parmesão ralado'},
  {id:4, name:'Portuguesa', img:'/src/assets/image/portuguesa.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Queijo, presunto, ovo de codorna, azeitona preta, cebola, oregano e pimentão verde.'},
  {id:5, name:'Sorvete', img:'/src/assets/image/pizza5.png', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:6, name:'Moda da Casa', img:'/src/assets/image/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:7, name:'Chocolate', img:'/src/assets/image/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
];

export const Main = () => {

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});
    const handleProductClick = (data) => {
      setModalData(data);
      setModalStatus(true);
    };

  return (
            <main className='pizzaWindowBody'>
              <div className='pizzaWindowArea'>
                <h1>Pizzas</h1>
                <div className="pizza-area">
                  {tiposPizzas.map((item, index) => (
                    <Models key={index} data={item} onclick={handleProductClick}/>
                  ))}
                </div>
              </div>

              <Modal status={modalStatus} setStatus={setModalStatus}> 
                  <ModalProduct data={modalData} />
              </Modal>

            </main>
    );
  };
