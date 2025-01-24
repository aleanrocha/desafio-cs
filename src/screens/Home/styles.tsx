import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const MainContent = styled.main`
  width: 90%;
  max-width: 1280px;
  margin: 3rem auto;
  flex: 1;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    padding: 2rem 0rem;
    gap: 2rem;
  }
`
