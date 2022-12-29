import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useState } from 'react'

import { ShoppingCartCafeContainer } from './styles'
import { CoffeeDataInterface } from '../../../../data/coffeeData'
import { convertCentsToReal } from '../../../../utils'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function ShoppingCartCafe(coffee: CoffeeDataInterface) {
  const { amountOfCoffees, image, name, priceInCents } = coffee
  const [amountOfCoffeesState, setAmountOfCoffeesState] =
    useState(amountOfCoffees)
  const [totalPriceInCentsState, setTotalPriceInCentsState] = useState(
    priceInCents * amountOfCoffees,
  )
  const { popularShoppingCartData, removeCoffee } = useContext(CoffeeContext)

  function handleIncreaseAmountOfCoffee() {
    setAmountOfCoffeesState((state) => {
      popularShoppingCartData({
        ...coffee,
        amountOfCoffees: state + 1,
      })

      setTotalPriceInCentsState(priceInCents * (state + 1))

      return state + 1
    })
  }

  function handleDecreaseAmountOfCoffee() {
    if (amountOfCoffeesState > 1) {
      setAmountOfCoffeesState((state) => {
        popularShoppingCartData({
          ...coffee,
          amountOfCoffees: state - 1,
        })

        setTotalPriceInCentsState(priceInCents * (state - 1))

        return state - 1
      })
    } else {
      if (confirm(`Deseja remover o ${name}`) === true) {
        handleRemoveCoffee()
      }
    }
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee)
  }

  return (
    <ShoppingCartCafeContainer>
      <img src={image} alt="arabe" />
      <div className="collum">
        <h2>{name}</h2>
        <div className="row">
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
          <button onClick={() => handleRemoveCoffee()}>
            <Trash />
            <p>Remover</p>
          </button>
        </div>
      </div>
      <p>R$ {convertCentsToReal(totalPriceInCentsState)}</p>
    </ShoppingCartCafeContainer>
  )
}
