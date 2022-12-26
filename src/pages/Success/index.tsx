import { SuccessContainer } from './styles'

import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <div className="boxOrderInfo">
          <div className="headerSubtitle">
            <div className="mapPinBackground">
              <MapPin size={22} weight="fill" />
            </div>
            <div className="text">
              <p>
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </div>
          </div>
          <div className="headerSubtitle">
            <div className="timerBackground">
              <Timer size={22} weight="fill" />
            </div>
            <div className="text">
              <p>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div className="headerSubtitle">
            <div className="currencyDollarBackground">
              <CurrencyDollar size={22} weight="fill" />
            </div>
            <div className="text">
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </section>
      <img src={illustration} alt="illustration" />
    </SuccessContainer>
  )
}
