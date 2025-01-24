import styled from 'styled-components'

export const Modal = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 85%;
  max-width: 420px;
  padding: 2rem;
  border-radius: 0.4rem;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  > span {
    margin-bottom: 1rem;
    color: var(--error-color);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  > p {
    color: var(--primary-color);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    > button {
      width: 100%;
    }
  }
`

export const Text = styled.p``
