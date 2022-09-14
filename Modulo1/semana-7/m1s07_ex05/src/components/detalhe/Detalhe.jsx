import styled from 'styled-components';

const container = styled.div``;

export const Detalhe = () => {
  return (
 
      <div class="pizzaWindowArea">
          <div class="pizzaWindowBody">
              <div class="pizzaInfo--cancelMobileButton">Voltar</div>
              <div class="pizzaBig">
                  <img src="" />
              </div>
              <div class="pizzaInfo">
                  <h1>--</h1>
                  <div class="pizzaInfo--desc">--</div>
                  <div class="pizzaInfo--sizearea">
                      <div class="pizzaInfo--sector">Tamanho</div>
                      <div class="pizzaInfo--sizes">
                          <div data-key="0" class="pizzaInfo--size">PEQUENA <span>--</span></div>
                          <div data-key="1" class="pizzaInfo--size">MÉDIO <span>--</span></div>
                          <div data-key="2" class="pizzaInfo--size selected">GRANDE <span>--</span></div>
                      </div>
                  </div>
                  <div class="pizzaInfo--pricearea">
                      <div class="pizzaInfo--sector">Preço</div>
                      <div class="pizzaInfo--price">
                          <div class="pizzaInfo--actualPrice">R$ --</div>
                          <div class="pizzaInfo--qtarea">
                              <button class="pizzaInfo--qtmenos">-</button>
                              <div class="pizzaInfo--qt">1</div>
                              <button class="pizzaInfo--qtmais">+</button>
                          </div>
                      </div>
                  </div>
                  <div class="pizzaInfo--addButton">Adicionar ao carrinho</div>
                  <div class="pizzaInfo--cancelButton">Cancelar</div>
              </div>
          </div>
      </div>
  )
}