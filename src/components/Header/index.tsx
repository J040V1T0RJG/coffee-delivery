import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { shoppingCart } = useContext(CoffeeContext)

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
              {shoppingCart.length > 0 && (
                <div className="checkoutCounter">{shoppingCart.length}</div>
              )}
              <ShoppingCart size={22} weight="fill" />
            </div>
          </NavLink>
        </span>
      </nav>
    </HeaderContainer>
  )
}
