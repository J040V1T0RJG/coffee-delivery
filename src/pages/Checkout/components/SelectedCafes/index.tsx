import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { convertCentsToReal } from '../../../../utils'
import { ShoppingCartCafe } from '../ShoppingCartCafeCard'
import { SelectedCafesContainer } from './styles'

export function SelectedCafes() {
  const { shoppingCart } = useContext(CoffeeContext)

  function calculatesTheTotalPriceOfTheItems() {
    let total: number = 0

    for (let i = 0; i < shoppingCart.length; i++) {
      total += shoppingCart[i].priceInCents * shoppingCart[i].amountOfCoffees
    }

    return total
  }

  return (
    <SelectedCafesContainer>
      <h1>Cafés selecionados</h1>
      <div className="coffeeCardSelected">
        {shoppingCart.map((coffee) => {
          return <ShoppingCartCafe key={coffee.name} {...coffee} />
        })}
        <span className="priceInformation">
          <p>Total de itens</p>
          <p>
            R${' '}
            {shoppingCart.length > 0
              ? convertCentsToReal(calculatesTheTotalPriceOfTheItems())
              : '00,00'}
          </p>
        </span>
        <span className="priceInformation">
          <p>Entrega</p>
          <p>R$ {convertCentsToReal(350)}</p>
        </span>
        <span className="priceInformation total">
          <p className="total">Total</p>
          <p className="total">
            R${' '}
            {shoppingCart.length > 0
              ? convertCentsToReal(calculatesTheTotalPriceOfTheItems() + 350)
              : '00,00'}
          </p>
        </span>
        <button>confirmar pedido</button>
      </div>
    </SelectedCafesContainer>
  )
}
