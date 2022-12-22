import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    margin-bottom: 0.75rem;
    margin-top: calc(0px - 1.25rem);
  }

  .coffeeType {
    display: flex;
    justify-content: center;
    align-items: center;

    width: min-content;
    border-radius: 100px;

    padding: 0.25rem 0.5rem 0.25rem 0.5rem;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    text-transform: uppercase;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    text-align: center;

    color: #403937;

    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    max-width: 13.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    text-align: center;

    color: #8d8686;
  }

  span {
    display: flex;
    align-items: center;
    gap: 1.375rem;

    margin-top: 2rem;

    > p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      text-align: right;

      color: #574f4d;

      strong {
        font-size: 1.5rem;
      }
    }
  }
`

export const CoffeeCardForm = styled.form`
  display: flex;
  gap: 0.5rem;

  .buttonMinusAndPlus {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem;
    gap: 0.125rem;
    border-radius: 6px;

    .minus {
      color: ${(props) => props.theme.purple};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    .plus {
      color: ${(props) => props.theme.purple};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  .buttonShoppingCart {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
