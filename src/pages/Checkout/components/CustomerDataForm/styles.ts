import styled from 'styled-components'

export const CustomerDataFormContainer = styled.div`
  width: 40rem;

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

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .deliveryAddressForm {
      display: flex;
      flex-direction: column;

      padding: 2.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme['base-card']};

      > :first-child {
        color: ${(props) => props.theme['yellow-dark']};
      }

      .inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
          width: auto;

          position: relative;

          p {
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 130%;

            position: absolute;
            right: 0.75rem;

            color: ${(props) => props.theme['base-label']};
          }

          input:focus ~ p {
            visibility: hidden;
          }
        }

        .smallSize {
          width: 3.75rem;
        }

        .averageSize {
          width: 12.5rem;
        }

        .automaticSize {
          width: 100%;
        }

        input {
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: ${(props) => props.theme['base-button']};
          width: auto;

          &::placeholder {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 130%;

            color: ${(props) => props.theme['base-label']};
          }
        }
      }
    }

    .paymentForm {
      display: flex;
      flex-direction: column;

      padding: 2.5rem;
      border-radius: 6px;
      background: ${(props) => props.theme['base-card']};

      > :first-child {
        color: ${(props) => props.theme['purple-dark']};
      }

      .paymentButtons {
        display: flex;
        justify-content: space-between;

        button {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1rem;
          gap: 0.75rem;

          background: ${(props) => props.theme['base-button']};
          color: ${(props) => props.theme['purple-dark']};
          border-radius: 6px;
          border: none;
          cursor: pointer;

          &:focus {
            box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
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
      }
    }

    .text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      h2 {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      h3 {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    .headerSubtitle {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
  }
`
