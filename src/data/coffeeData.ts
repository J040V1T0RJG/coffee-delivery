export interface CoffeeDataInterface {
  image: string
  type: string[]
  name: string
  description: string
  priceInCents: number
}

export const coffeeData: CoffeeDataInterface[] = [
  {
    image: 'expresso-tradicional.svg',
    type: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
  },
  {
    image: 'expresso-americano.svg',
    type: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 990,
  },
  {
    image: 'expresso-cremoso.svg',
    type: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 990,
  },
  {
    image: 'expresso-gelado.svg',
    type: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 990,
  },
  {
    image: 'cafe-com-leite.svg',
    type: ['Tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 990,
  },
  {
    image: 'latte.svg',
    type: ['Tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 990,
  },
  {
    image: 'capuccino.svg',
    type: ['Tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 990,
  },
  {
    image: 'macchiato.svg',
    type: ['Tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 990,
  },
  {
    image: 'mocaccino.svg',
    type: ['Tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    priceInCents: 990,
  },
  {
    image: 'chocolate-quente.svg',
    type: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 990,
  },
  {
    image: 'cubano.svg',
    type: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 990,
  },
  {
    image: 'havaiano.svg',
    type: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 990,
  },
  {
    image: 'arabe.svg',
    type: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 990,
  },
  {
    image: 'irlandes.svg',
    type: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 990,
  },
]
