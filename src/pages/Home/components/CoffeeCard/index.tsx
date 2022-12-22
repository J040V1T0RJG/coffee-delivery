import { CoffeeCardContainer, CoffeeCardForm } from './styles'
import americano from '../../../../assets/americano.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={americano} alt="expresso americano" />
      <div className="coffeeType">TRADICIONAL</div>
      <h1>Expresso Americano</h1>
      <h2>Expresso diluído, menos intenso que o tradicional</h2>
      <span>
        <p>
          R$ <strong>9,90</strong>
        </p>
        <CoffeeCardForm>
          <div className="buttonMinusAndPlus">
            <Minus weight="bold" className="minus" />
            <p>1</p>
            <Plus weight="bold" className="plus" />
          </div>
          <div className="buttonShoppingCart">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </CoffeeCardForm>
      </span>
    </CoffeeCardContainer>
  )
}
