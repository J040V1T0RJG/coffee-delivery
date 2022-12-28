import styled from 'styled-components'

export const SelectedCafesContainer = styled.div`
  width: 28rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .coffeeCardSelected {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;

    .priceInformation {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 0.75rem;

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;

        display: flex;
        align-items: center;
        text-align: right;

        color: ${(props) => props.theme['base-text']};
      }

      .total {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;

        display: flex;
        align-items: center;
        text-align: right;

        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    > button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      gap: 0.25rem;
      width: 100%;

      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      border-radius: 6px;
      border: none;
      cursor: pointer;
      text-transform: uppercase;

      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
      }

      &:hover {
        background: ${(props) => props.theme['yellow-dark']};
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`
