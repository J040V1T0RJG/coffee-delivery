import { CoffeeCardContainer, CoffeeCardForm } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeDataInterface } from '../../../../data/coffeeData'

export function CoffeeCard(coffeeProps: CoffeeDataInterface) {
  const { description, image, name, priceInCents, type } = coffeeProps

  return (
    <CoffeeCardContainer>
      <img
        src={`http://localhost:5173/src/assets/${image}`}
        alt="expresso americano"
      />
      <div className="coffeeTypeList">
        {type.map((typ) => {
          return (
            <div key={typ} className="coffeeType">
              {typ.toLowerCase()}
            </div>
          )
        })}
      </div>
      <h1>{name}</h1>
      <h2>{description}</h2>
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
