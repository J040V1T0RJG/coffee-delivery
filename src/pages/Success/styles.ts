import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;

  section {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      margin-bottom: 0.25rem;

      color: ${(props) => props.theme['yellow-dark']};
    }

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-title']};
      font-stretch: 100;
    }

    .boxOrderInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2.5rem;
      gap: 2rem;
      margin-top: 2.5rem;

      background: linear-gradient(
            ${(props) => props.theme.background},
            ${(props) => props.theme.background}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme['purple-dark']}
          )
          border-box;
      border-radius: 6px 36px;
      border: 1px solid transparent;

      .headerSubtitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.75rem;

        > :first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;

          width: 2rem;
          height: 2rem;

          color: ${(props) => props.theme.white};
          border-radius: 50%;

          background: red;
        }

        .mapPinBackground {
          background: ${(props) => props.theme.purple};
        }

        .timerBackground {
          background: ${(props) => props.theme.yellow};
        }

        .currencyDollarBackground {
          background: ${(props) => props.theme['yellow-dark']};
        }

        .text {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 1rem;
          line-height: 130%;

          color: ${(props) => props.theme['base-text']};
        }
      }
    }
  }
`
