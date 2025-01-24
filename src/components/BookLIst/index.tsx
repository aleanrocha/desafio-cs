import { useState } from 'react'

import {
  ListContainer,
  Image,
  Table,
  TableBody,
  TableHead,
  Td,
  Tr,
  Empty,
  Wrapper,
} from '../AuthorLIst/styles'

import { Author } from '../../interfaces/Author'
import { Book } from '../../interfaces/Book'

import trash from '../../assets/trash-outline.svg'
import eye from '../../assets/eye-outline.svg'

import { useCatalogContext } from '../../context/CatalogContext'

import AlertModal from '../AlertModal'
import BookInfoModal from '../BookInfoModal'

export default function BookList() {
  const [alertModal, setAlertModal] = useState<boolean>(false)
  const [bookModal, setBookModal] = useState<boolean>(false)
  const [bookInfo, setBookInfo] = useState<Book | null>(null)
  const [authorOfBook, setAuthorOfBook] = useState<Author | null>(null)

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const { books, authors, removeBookById } = useCatalogContext()

  const handleAlertModal = (id: string) => {
    setAlertModal(true)
    setSelectedId(id)
  }

  const handleBookModal = (id: string) => {
    setBookModal(true)
    const bookInfo = books?.find((bk) => bk.id === id)
    const authorOfBook = authors?.find((ath) => ath.id === bookInfo?.author_id)
    if (bookInfo) setBookInfo(bookInfo)
    if (authorOfBook) setAuthorOfBook(authorOfBook)
  }

  const handleConfirmRemove = () => {
    if (selectedId) removeBookById(selectedId)
    setAlertModal(false)
  }

  return (
    <ListContainer>
      <h2>Livros</h2>
      {alertModal && (
        <AlertModal
          type={'book'}
          confirm={handleConfirmRemove}
          cancel={() => setAlertModal(false)}
        />
      )}
      {bookModal && (
        <BookInfoModal
          authorOfBook={authorOfBook}
          bookInfo={bookInfo}
          closeBookModal={() => setBookModal(false)}
        />
      )}
      {books && books.length > 0 ? (
        <Wrapper>
          <Table>
            <TableHead>
              <Tr>
                <Td>Nome</Td>
                <Td>Páginas</Td>
                <Td colSpan={2}></Td>
              </Tr>
            </TableHead>
            <TableBody>
              {books &&
                books.map((book) => (
                  <Tr key={book.id}>
                    <Td>{book.name}</Td>
                    <Td>{book.pages ? book.pages : 'Não preenchido'}</Td>
                    <Td style={{ border: 'none' }}>
                      <Image
                        src={eye}
                        alt="Icone de um olho"
                        onClick={() => handleBookModal(book.id)}
                      />
                    </Td>
                    <Td style={{ border: 'none' }}>
                      <Image
                        src={trash}
                        alt="Icone de uma lixeira"
                        onClick={() => handleAlertModal(book.id)}
                      />
                    </Td>
                  </Tr>
                ))}
            </TableBody>
          </Table>
        </Wrapper>
      ) : (
        <Empty>Nenhum Livro Cadastrado ):</Empty>
      )}
    </ListContainer>
  )
}
