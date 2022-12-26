import styled from 'styled-components'

export const ShoppingCartCafeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 23rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;

    white-space: nowrap;

    color: ${(props) => props.theme['base-text']};
  }

  .collum {
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 10.75rem;
    gap: 0.5rem;

    margin-left: 1.25rem;
    margin-right: auto;

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      display: flex;
      align-items: center;
      white-space: nowrap;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .buttonMinusAndPlus {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${(props) => props.theme['base-button']};
    padding: 0.5rem;
    gap: 0.125rem;
    border-radius: 6px;
    min-width: 4.5rem;

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

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;

    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 160%;

      text-transform: uppercase;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
