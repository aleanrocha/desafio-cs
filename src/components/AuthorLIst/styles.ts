import styled from 'styled-components'

export const ListContainer = styled.div`
  text-align: center;
  padding: 1rem;
`
export const Wrapper = styled.div`
  overflow-x: auto;
`


export const Table = styled.table`
  width: 100%;
  margin: 20px auto;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
`

export const TableHead = styled.thead`
  background-color: var(--tertiary-color);
  font-weight: 700;
`
export const TableBody = styled.tbody`
  &:last-child {
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
`

export const Tr = styled.tr``

export const Td = styled.td`
  padding: 15px;
  text-align: center;
  border: 1px solid var(--border-color);
`

export const Image = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`

export const Empty = styled.p`
  padding: 2rem;
  font-size: 1.2rem;
  color: var(--error-color);
`
