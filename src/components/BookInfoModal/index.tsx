import { Author } from '../../interfaces/Author'
import { Book } from '../../interfaces/Book'

import {
  BookModal,
  CloseModal,
  Text,
  Title,
  Wrapper,
  AuthorName,
  AUthorContent,
} from './styles'

interface BookInfoModalProps {
  bookInfo: Book | null
  authorOfBook: Author | null
  closeBookModal: () => void
}

export default function BookInfoModal(props: BookInfoModalProps) {
  const { bookInfo, authorOfBook, closeBookModal } = props
  return (
    <BookModal>
      <Wrapper>
        <CloseModal onClick={() => closeBookModal()}>x</CloseModal>
        {bookInfo && (
          <>
            <Title>Informações do Livro</Title>
            <Text>
              Título: <span>{bookInfo.name}</span>
            </Text>
            <Text>
              Páginas: {bookInfo.pages ? bookInfo.pages : 'Não preenchido'}
            </Text>
            <AUthorContent>
              <Title>Autor do livro</Title>
              <AuthorName>{authorOfBook?.name}</AuthorName>
            </AUthorContent>
          </>
        )}
      </Wrapper>
    </BookModal>
  )
}
