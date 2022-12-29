import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'

import { CoffeeDataInterface } from '../../../../data/coffeeData'
import { CoffeeCardContainer, CoffeeCardForm } from './styles'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { convertCentsToReal } from '../../../../utils'

export function CoffeeCard(coffeeProps: CoffeeDataInterface) {
  const { description, image, name, priceInCents, type, amountOfCoffees } =
    coffeeProps
  const { popularShoppingCartData } = useContext(CoffeeContext)
  const [amountOfCoffeesState, setAmountOfCoffeesState] =
    useState(amountOfCoffees)

  function handleAddToShoppingCart(coffee: CoffeeDataInterface) {
    if (coffee.amountOfCoffees > 0) {
      popularShoppingCartData({
        ...coffee,
        amountOfCoffees: amountOfCoffeesState,
      })
    }
  }

  function handleIncreaseAmountOfCoffee() {
    setAmountOfCoffeesState((state) => state + 1)
  }

  function handleDecreaseAmountOfCoffee() {
    if (amountOfCoffeesState > 0) {
      setAmountOfCoffeesState((state) => state - 1)
    }
  }

  return (
    <CoffeeCardContainer>
      <img sizes="64" src={image} alt="expresso americano" />
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
          R$ <strong>{convertCentsToReal(priceInCents)}</strong>
        </p>
        <CoffeeCardForm>
          <div className="buttonMinusAndPlus">
            <Minus
              weight="bold"
              className="minus"
              onClick={() => handleDecreaseAmountOfCoffee()}
            />
            <p>{amountOfCoffeesState}</p>
            <Plus
              weight="bold"
              className="plus"
              onClick={() => handleIncreaseAmountOfCoffee()}
            />
          </div>
          <div
            className="buttonShoppingCart"
            onClick={() => handleAddToShoppingCart(coffeeProps)}
          >
            <ShoppingCart size={22} weight="fill" />
          </div>
        </CoffeeCardForm>
      </span>
    </CoffeeCardContainer>
  )
}
