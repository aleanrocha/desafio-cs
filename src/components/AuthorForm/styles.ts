import styled from 'styled-components'

interface InputProps {
  $isError: boolean
}

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3rem);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 85%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 0.4rem;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  > p {
    color: var(--error-color);
    font-size: 0.9rem;
  }
  > button {
    margin-top: 1rem;
  }
`

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-weight: 700;
  font-size: 1.7rem;
`

export const Label = styled.label`
  color: var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 700;
`

export const Input = styled.input<InputProps>`
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: 1.5px solid
    ${(props) =>
      props.$isError ? 'var(--error-color)' : 'var(--border-color)'};
  &:focus {
    border-color: var(--primary-color);
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.4rem;
  border: none;
  font-weight: 700;
  background-color: var(--tertiary-color);
  cursor: pointer;
`
export const Option = styled.option`
  font-size: 1rem;
`

export const CloseForm = styled.span`
  background-color: var(--primary-color);
  color: var(--light-text);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 900;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -18px;
  left: -18px;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`
