import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeeDataInterface } from '../data/coffeeData'

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface UserAddressDataInterface {
  cep: number
  street: string
  houseNumber: number
  houseComplement?: string
  neighborhood: string
  city: string
  state: string
}

interface CreateContextType {
  shoppingCart: CoffeeDataInterface[]
  userAddress: UserAddressDataInterface | null
  popularShoppingCartData: (cart: CoffeeDataInterface) => void
  fillInUserAddressData: (address: UserAddressDataInterface) => void
  removeCoffee: (cart: CoffeeDataInterface) => void
}

interface LocalStoredInterface {
  shoppingCart: CoffeeDataInterface[]
  userAddress: UserAddressDataInterface
}

export const CoffeeContext = createContext({} as CreateContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  useEffect(() => {
    const storedStateAsJson = localStorage.getItem(
      '@coffee-delivery:shopping-cart-&-user-address-1.0.0',
    )

    if (storedStateAsJson) {
      const storedStateAsObject: LocalStoredInterface =
        JSON.parse(storedStateAsJson)

      if (storedStateAsObject.shoppingCart.length > 0) {
        returnsLocalStorage(storedStateAsObject)
      }
    }
  }, [])

  const [shoppingCart, setShoppingCart] = useState<CoffeeDataInterface[]>([])
  const [userAddress, setUserAddress] =
    useState<UserAddressDataInterface | null>(null)

  function returnsLocalStorage({
    shoppingCart,
    userAddress,
  }: LocalStoredInterface) {
    setShoppingCart(shoppingCart)
    setUserAddress(userAddress)
  }

  function popularShoppingCartData(cart: CoffeeDataInterface) {
    const findRepeatedShoppingCartIndex = shoppingCart.findIndex(
      (coffe) => coffe.name === cart.name,
    )

    if (findRepeatedShoppingCartIndex !== -1) {
      const modifiedShoppingCart: CoffeeDataInterface[] = []

      for (let i = 0; i < shoppingCart.length; i++) {
        if (i === findRepeatedShoppingCartIndex) {
          const newAmountOfCoffees = cart.amountOfCoffees

          modifiedShoppingCart.push({
            ...shoppingCart[i],
            amountOfCoffees: newAmountOfCoffees,
          })
        } else {
          modifiedShoppingCart.push(shoppingCart[i])
        }
      }

      setShoppingCart(modifiedShoppingCart)
    } else {
      setShoppingCart((state) => [...state, cart])
    }
  }

  function fillInUserAddressData(address: UserAddressDataInterface) {
    setUserAddress(address)
  }

  function removeCoffee(cart: CoffeeDataInterface) {
    const findCoffeeIndex = shoppingCart.findIndex(
      (coffe) => coffe.name === cart.name,
    )
    if (findCoffeeIndex !== -1) {
      const modifiedShoppingCart: CoffeeDataInterface[] = []

      for (let i = 0; i < shoppingCart.length; i++) {
        if (i !== findCoffeeIndex) {
          modifiedShoppingCart.push(shoppingCart[i])
        }
      }
      setShoppingCart(modifiedShoppingCart)
    }
  }

  useEffect(() => {
    const stateJSON = JSON.stringify({ shoppingCart, userAddress })

    localStorage.setItem(
      '@coffee-delivery:shopping-cart-&-user-address-1.0.0',
      stateJSON,
    )
  }, [shoppingCart, userAddress])

  return (
    <CoffeeContext.Provider
      value={{
        shoppingCart,
        userAddress,
        popularShoppingCartData,
        fillInUserAddressData,
        removeCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
