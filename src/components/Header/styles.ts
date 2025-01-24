import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  color: var(--light-text);
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h3`
  padding: 0.5rem;
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border-radius: 3rem;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 10px var(--highlight-color);
  }
`