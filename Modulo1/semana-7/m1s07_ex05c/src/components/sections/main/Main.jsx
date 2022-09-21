import { Models } from '../../models/Models';
import '../main/main.css';

import Cardapio from '../../../assets/dados/Cardapio.json';

export const Main = () => {

  /*  const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});
    const handleProductClick = (data) => {
      setModalData(data);
      setModalStatus(true);
    }; */
console.log(Cardapio);
  return (
            <main className='pizzaWindowBody'>
              <div className='pizzaWindowArea'>
                <h1>Pizzas</h1>
                <div className="pizza-area">
                  {Cardapio.map((item, index) => (
                    <Models key={index} data={item} onclick=" "/>
                  ))}
                </div>
              </div>

              

            </main>
    );
  };
