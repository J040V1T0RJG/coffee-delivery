import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'

import { CustomerDataFormContainer } from './styles'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

const newAddressFormValidationSchema = zod.object({
  cep: zod.number(),
  street: zod.string(),
  houseNumber: zod.number().min(1),
  houseComplement: zod.string().nullable(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string().length(2),
  payment: zod.string(),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function CustomerDataForm() {
  const { userAddress, fillInUserAddressData } = useContext(CoffeeContext)

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: userAddress?.cep || NaN,
      street: userAddress?.street || '',
      houseNumber: userAddress?.houseNumber || NaN,
      houseComplement: userAddress?.houseComplement || null,
      neighborhood: userAddress?.neighborhood || '',
      city: userAddress?.city || '',
      state: userAddress?.state || '',
      payment: userAddress?.payment || '',
    },
  })

  const { register, handleSubmit } = newAddressForm

  function handleSubmitAddress(data: NewAddressFormData) {
    fillInUserAddressData(data)
  }

  return (
    <CustomerDataFormContainer>
      <h1>Complete seu pedido</h1>
      <form onSubmit={handleSubmit(handleSubmitAddress)}>
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
              id="cep"
              type="number"
              placeholder="CEP"
              required
              height={8}
              className="averageSize"
              value={userAddress?.cep}
              {...register('cep', { valueAsNumber: true })}
            />
            <input
              id="street"
              type="text"
              placeholder="Rua"
              required
              value={userAddress?.street}
              {...register('street')}
            />
            <div className="row">
              <input
                id="houseNumber"
                type="number"
                min={1}
                placeholder="Número"
                required
                className="averageSize"
                value={userAddress?.houseNumber}
                {...register('houseNumber', { valueAsNumber: true })}
              />
              <input
                id="houseComplement"
                type="text"
                placeholder="Complemento"
                className="automaticSize"
                value={userAddress?.houseComplement || ''}
                {...register('houseComplement')}
              />
              <p>Opcional</p>
            </div>
            <div className="row">
              <input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                required
                className="averageSize"
                value={userAddress?.neighborhood}
                {...register('neighborhood')}
              />
              <input
                id="city"
                type="text"
                placeholder="Cidade"
                required
                className="automaticSize"
                value={userAddress?.city}
                {...register('city')}
              />
              <input
                id="state"
                type="text"
                maxLength={2}
                placeholder="UF"
                required
                className="smallSize"
                value={userAddress?.state}
                {...register('state')}
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
            <button
              type="submit"
              value="Cartão de crédito"
              onClick={handleSubmit((data) => {
                handleSubmitAddress({
                  ...data,
                  payment: 'Cartão de crédito',
                })
              })}
            >
              <CreditCard />
              <p>Cartão de crédito</p>
            </button>
            <button
              type="submit"
              value="Cartão de débito"
              onClick={handleSubmit((data) => {
                handleSubmitAddress({
                  ...data,
                  payment: 'Cartão de débito',
                })
              })}
            >
              <Bank />
              <p>Cartão de débito</p>
            </button>
            <button
              type="submit"
              value="Dinheiro"
              onClick={handleSubmit((data) => {
                handleSubmitAddress({
                  ...data,
                  payment: 'Dinheiro',
                })
              })}
            >
              <Money />
              <p>Dinheiro</p>
            </button>
          </span>
        </div>
      </form>
    </CustomerDataFormContainer>
  )
}
