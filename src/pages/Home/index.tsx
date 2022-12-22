import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeCard } from './components/CoffeeCard'
import { coffeeData } from '../../data/coffeeData'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <h1>Nossos cafés</h1>
      <div className="coffeeCardList">
        {coffeeData.map((coffee) => {
          return <CoffeeCard key={coffee.name} {...coffee} />
        })}
      </div>
    </HomeContainer>
  )
}
