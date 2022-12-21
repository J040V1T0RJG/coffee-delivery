import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { IntroContainer } from './styles'
import imageMockupCoffee from '../../../../assets/imagem-mockup-cafe.svg'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <div className="items">
          <div className="firstGroupItems">
            <div className="item">
              <div className="shoppingCartIcon">
                <ShoppingCart size={16} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="item">
              <div className="timerIcon">
                <Timer size={16} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>

          <div className="secondGroupItems">
            <div className="item">
              <div className="packageIcon">
                <Package size={16} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="item">
              <div className="coffeeIcon">
                <Coffee size={16} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </div>
      <img src={imageMockupCoffee} alt="" />
    </IntroContainer>
  )
}
