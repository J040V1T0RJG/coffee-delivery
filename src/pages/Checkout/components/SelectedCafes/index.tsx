import { ShoppingCartCafe } from '../ShoppingCartCafeCard'
import { SelectedCafesContainer } from './styles'

export function SelectedCafes() {
  return (
    <SelectedCafesContainer>
      <h1>Cafés selecionados</h1>
      <div className="coffeeCardSelected">
        <ShoppingCartCafe />
        <span className="priceInformation">
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </span>
        <span className="priceInformation">
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </span>
        <span className="priceInformation total">
          <p className="total">Total</p>
          <p className="total">R$ 33,20</p>
        </span>
        <button>confirmar pedido</button>
      </div>
    </SelectedCafesContainer>
  )
}
