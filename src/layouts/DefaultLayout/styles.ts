import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 2rem auto;
  padding: 0 5rem 0 5rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
