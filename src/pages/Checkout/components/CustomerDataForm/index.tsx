import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CustomerDataFormContainer } from './styles'

export function CustomerDataForm() {
  return (
    <CustomerDataFormContainer>
      <h1>Complete seu pedido</h1>
      <form>
        <div className="deliveryAddressForm">
          <div className="headerSubtitle">
            <MapPinLine size={22} />
            <div className="text">
              <h2>Endereço de Entrega</h2>
              <h3>Informe o endereço onde deseja receber seu pedido</h3>
            </div>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="CEP"
              required
              pattern="\d{5}-\d{3}"
              className="averageSize"
            />
            <input type="text" placeholder="Rua" required />
            <div className="row">
              <input
                type="number"
                min={1}
                placeholder="Número"
                required
                className="averageSize"
              />
              <input
                type="text"
                placeholder="Complemento"
                className="automaticSize"
              />
              <p>Opcional</p>
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Bairro"
                required
                className="averageSize"
              />
              <input
                type="text"
                placeholder="Cidade"
                required
                className="automaticSize"
              />
              <input
                type="text"
                maxLength={2}
                placeholder="UF"
                required
                className="smallSize"
              />
            </div>
          </div>
        </div>
        <div className="paymentForm">
          <div className="headerSubtitle">
            <CurrencyDollar size={22} />
            <div className="text">
              <h2>Pagamento</h2>
              <h3>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h3>
            </div>
          </div>
          <span className="paymentButtons">
            <button>
              <CreditCard />
              <p>Cartão de crédito</p>
            </button>
            <button>
              <Bank />
              <p>Cartão de crédito</p>
            </button>
            <button>
              <Money />
              <p>Cartão de crédito</p>
            </button>
          </span>
        </div>
      </form>
    </CustomerDataFormContainer>
  )
}
