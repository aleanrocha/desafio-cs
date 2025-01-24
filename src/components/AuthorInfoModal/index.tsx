import { Author } from '../../interfaces/Author'
import { Book } from '../../interfaces/Book'
import {
  AuthorModal,
  CloseModal,
  ItemList,
  List,
  Text,
  Title,
  Wrapper,
  BooksContent,
} from './styles'

interface AuthorInfoModalProps {
  authorInfo: Author | null
  booksOfAuthor: Book[] | null
  closeAuthorModal: () => void
}

export default function AuthorInfoModal(props: AuthorInfoModalProps) {
  const { authorInfo, booksOfAuthor, closeAuthorModal } = props
  return (
    <AuthorModal>
      <Wrapper>
        <CloseModal onClick={() => closeAuthorModal()}>x</CloseModal>
        {authorInfo && (
          <>
            <Title>Informações do Autor</Title>
            <Text>
              Nome: <span>{authorInfo.name}</span>
            </Text>
            <Text>
              E-mail: {authorInfo.email ? authorInfo.email : 'Não preenchido'}
            </Text>
            <BooksContent>
              <Title>Livros do Autor</Title>
              <List>
                {booksOfAuthor && booksOfAuthor.length > 0 ? (
                  booksOfAuthor.map((book) => (
                    <ItemList key={book.id}>{book.name}</ItemList>
                  ))
                ) : (
                  <ItemList>Esse autor não possui livros</ItemList>
                )}
              </List>
            </BooksContent>
          </>
        )}
      </Wrapper>
    </AuthorModal>
  )
}
