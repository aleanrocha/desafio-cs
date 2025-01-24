import styled from 'styled-components'

export const AuthorModal = styled.div`
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
`

export const Title = styled.h3`
  margin-bottom: 1rem;
`

export const Text = styled.p`
  font-weight: bold;
  opacity: 0.7;
  > span {
    color: var(--primary-color);
  }
`
export const BooksContent = styled.div`
  margin-top: 1rem;
  > h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ItemList = styled.li`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 1rem;
  border-radius: 0.4rem;
  font-weight: 700;
`

export const CloseModal = styled.span`
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
