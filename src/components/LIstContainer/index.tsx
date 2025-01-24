import AuthorList from '../AuthorLIst'
import BookList from '../BookLIst'
import { List } from './styles'

export default function ListContainer() {
  return (
    <List>
      <AuthorList />
      <BookList />
    </List>
  )
}
