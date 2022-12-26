import { Minus, Plus, Trash } from 'phosphor-react'
import { ShoppingCartCafeContainer } from './styles'

import imagemTemporaria from '../../../../assets/arabe.svg'

export function ShoppingCartCafe() {
  return (
    <ShoppingCartCafeContainer>
      <img src={imagemTemporaria} alt="arabe" />
      <div className="collum">
        <h2>Expresso Tradicional</h2>
        <div className="row">
          <div className="buttonMinusAndPlus">
            <Minus weight="bold" className="minus" />
            <p>1</p>
            <Plus weight="bold" className="plus" />
          </div>
          <button>
            <Trash />
            <p>Remover</p>
          </button>
        </div>
      </div>
      <p>R$ 9,90</p>
    </ShoppingCartCafeContainer>
  )
}
