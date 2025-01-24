import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color: var(--highlight-color);
  color: var(--light-text);
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`
