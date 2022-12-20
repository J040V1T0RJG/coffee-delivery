import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <span>
          <div className="local">
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </div>
          <NavLink to="/checkout" title="Checkout">
            <div className="shopping-cart">
              <ShoppingCart size={22} weight="fill" />
            </div>
          </NavLink>
        </span>
      </nav>
    </HeaderContainer>
  )
}
