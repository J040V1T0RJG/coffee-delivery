import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <h1>Nossos cafés</h1>
      <CoffeeCard />
    </HomeContainer>
  )
}
