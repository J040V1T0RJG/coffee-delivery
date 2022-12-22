import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 5.875rem;
  margin-bottom: 7.875rem;

  width: auto;
  height: auto;

  img {
    margin-left: auto;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1rem;
    max-width: 36.75rem;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
    max-width: 36.75rem;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    margin-top: 4.125rem;

    .firstGroupItems {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .secondGroupItems {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
  }

  .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }

    > :first-child {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      color: ${(props) => props.theme.white};
    }

    .shoppingCartIcon {
      background: ${(props) => props.theme['yellow-dark']};
    }

    .timerIcon {
      background: ${(props) => props.theme.yellow};
    }

    .packageIcon {
      background: ${(props) => props.theme['base-text']};
    }

    .coffeeIcon {
      background: ${(props) => props.theme.purple};
    }
  }
`
