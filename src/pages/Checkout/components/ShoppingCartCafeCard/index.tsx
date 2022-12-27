import { Minus, Plus, Trash } from 'phosphor-react'
import { ShoppingCartCafeContainer } from './styles'

import { CoffeeDataInterface } from '../../../../data/coffeeData'
import { useContext, useState } from 'react'
import { convertCentsToReal } from '../../../../utils'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function ShoppingCartCafe(coffee: CoffeeDataInterface) {
  const { amountOfCoffees, image, name, priceInCents } = coffee
  const [amountOfCoffeesState, setAmountOfCoffeesState] =
    useState(amountOfCoffees)
  const [totalPriceInCentsState, setTotalPriceInCentsState] = useState(
    priceInCents * amountOfCoffees,
  )
  const { popularShoppingCartData } = useContext(CoffeeContext)

  // function handleRemoveCoffee(nameOfCafeToBeRemoved: string) {
  //   const findRepeatedShoppingCartIndex = shoppingCart.findIndex(
  //     (coffe) => coffe.name === cart.name,
  //   )
  // }

  return (
    <ShoppingCartCafeContainer>
      <img src={`http://localhost:5173/src/assets/${image}`} alt="arabe" />
      <div className="collum">
        <h2>{name}</h2>
        <div className="row">
          <div className="buttonMinusAndPlus">
            <Minus weight="bold" className="minus" />
            <p>{amountOfCoffeesState}</p>
            <Plus weight="bold" className="plus" />
          </div>
          <button>
            <Trash />
            <p>Remover</p>
          </button>
        </div>
      </div>
      <p>R$ {convertCentsToReal(totalPriceInCentsState)}</p>
    </ShoppingCartCafeContainer>
  )
}
