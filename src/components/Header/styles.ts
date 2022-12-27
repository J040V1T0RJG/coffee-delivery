import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      .local {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;

        width: 8.875rem;
        height: 2.375rem;
        border-radius: 6px;

        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme.purple};

        p {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 130%;
        }
      }

      .shopping-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        width: 2.375rem;
        height: 2.375rem;
        border-radius: 6px;

        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme.yellow};

        &:hover {
          background: ${(props) => props.theme.yellow};
          color: ${(props) => props.theme['yellow-light']};
        }

        .checkoutCounter {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;

          top: -0.5rem;
          right: -0.5rem;

          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;

          background: ${(props) => props.theme['yellow-dark']};
          color: ${(props) => props.theme.white};

          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: -0.06em;
        }
      }
    }
  }
`
