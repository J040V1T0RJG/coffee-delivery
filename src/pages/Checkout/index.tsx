import { CustomerDataForm } from './components/CustomerDataForm'
import { SelectedCafes } from './components/SelectedCafes'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CustomerDataForm />
      <SelectedCafes />
    </CheckoutContainer>
  )
}
