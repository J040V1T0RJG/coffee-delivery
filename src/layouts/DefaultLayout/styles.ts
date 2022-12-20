import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: calc(100vw - 20rem);
  //height: calc(100vh - 10rem);
  margin: 2rem 10rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
