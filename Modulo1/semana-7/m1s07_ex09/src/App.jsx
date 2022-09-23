import React from 'react';
import { Container, Menu, PageBody } from './appStyled';
import HomeScreen from '../src/components/sections/HomeScreen';
import MenuItem from '../src/components/sections/MenuItem/';
import ReactTooltip from 'react-tooltip';

function App() {

  return (
        <Container>
            
            <Menu>

                <MenuItem title="Home" icon="../src/assets/image/store.png" link="/" />
                <MenuItem title="Pedidos" icon="../src/assets/image/order.png" link="/orders" />
                <MenuItem title="Perfil" icon="../src/assets/image/profile.png" link="/profile" />

            </Menu>

            <PageBody> 

              <HomeScreen/>

            </PageBody>          
          <ReactTooltip id='tip-top' place="top" effect="solid" />
          <ReactTooltip id='tip-right' place="right" effect="solid" />
        </Container>
      
        

      
        
              
)};

export default App;
