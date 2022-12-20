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

        width: 2.375rem;
        height: 2.375rem;
        border-radius: 6px;

        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme.yellow};

        &:hover {
          background: ${(props) => props.theme.yellow};
          color: ${(props) => props.theme['yellow-light']};
        }
      }
    }
  }
`
