import styled from 'styled-components'

export const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;

  > div {
    width: 50%;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      width: 100%;
    }
  }
`
