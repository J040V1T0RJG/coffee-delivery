import styled from 'styled-components'

export const HomeContainer = styled.main`
  > h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    margin-top: 2rem;
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
  .coffeeCardList {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
  }
`
