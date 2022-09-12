import { Models } from '../models/Models';
import '/src/components/main/main.css';

const tiposPizzas = [
  {id:1, name:'Mussarela', img:'/src/assets/image/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:2, name:'Calabresa', img:'/src/assets/image/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:3, name:'Quatro Queijos', img:'/src/assets/image/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:4, name:'Americana', img:'/src/assets/image/pizza4.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:5, name:'Sorvete', img:'/src/assets/image/pizza5.png', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:6, name:'Moda da Casa', img:'/src/assets/image/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
  {id:7, name:'Chocolate', img:'/src/assets/image/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
];

export const Main = () => {
  return (
            <main className='pizzaWindowBody'>
              <div className='pizzaWindowArea'>
                <h1>Pizzas</h1>
                <div className="pizza-area">

                    <Models pizza={tiposPizzas[0]} />
                    <Models pizza={tiposPizzas[1]} />
                    <Models pizza={tiposPizzas[2]} />
                    <Models pizza={tiposPizzas[3]} />
                    <Models pizza={tiposPizzas[4]} />
                    <Models pizza={tiposPizzas[5]} />
                    <Models pizza={tiposPizzas[6]} />
                </div>
              </div>
            </main>
  )};
