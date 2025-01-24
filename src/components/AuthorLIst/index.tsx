import { useState } from 'react'

import {
  ListContainer,
  Empty,
  Image,
  Table,
  TableBody,
  TableHead,
  Td,
  Tr,
  Wrapper,
} from './styles'

import { Author } from '../../interfaces/Author'
import { Book } from '../../interfaces/Book'

import trash from '../../assets/trash-outline.svg'
import eye from '../../assets/eye-outline.svg'

import { useCatalogContext } from '../../context/CatalogContext'

import AlertModal from '../AlertModal'
import AuthorInfoModal from '../AuthorInfoModal'

export default function AuthorkList() {
  const [alertModal, setAlertModal] = useState<boolean>(false)
  const [authorModal, setAuthorModal] = useState<boolean>(false)
  const [authorInfo, setAuthorInfo] = useState<Author | null>(null)
  const [booksOfAuthor, setBooksOfAuthor] = useState<Book[] | null>(null)

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const { books, authors, removeAuthorById } = useCatalogContext()

  const handleAlertModal = (id: string) => {
    setAlertModal(true)
    setSelectedId(id)
  }

  const handleAuthorModal = (id: string) => {
    setAuthorModal(true)
    const authorInfo = authors?.find((ath) => ath.id === id)
    const booksOfAuthor = books?.filter((bk) => bk.author_id === id)
    if (authorInfo) setAuthorInfo(authorInfo)
    if (booksOfAuthor) setBooksOfAuthor(booksOfAuthor)
  }

  const handleConfirmRemove = () => {
    if (selectedId) removeAuthorById(selectedId)
    setAlertModal(false)
  }

  return (
    <ListContainer>
      <h2>Autores</h2>
      {alertModal && (
        <AlertModal
          type={'author'}
          confirm={handleConfirmRemove}
          cancel={() => setAlertModal(false)}
        />
      )}
      {authorModal && (
        <AuthorInfoModal
          authorInfo={authorInfo}
          booksOfAuthor={booksOfAuthor}
          closeAuthorModal={() => setAuthorModal(false)}
        />
      )}
      {authors && authors.length > 0 ? (
        <Wrapper>
          <Table>
            <TableHead>
              <Tr>
                <Td>Nome</Td>
                <Td>E-mail</Td>
                <Td colSpan={2}></Td>
              </Tr>
            </TableHead>
            <TableBody>
              {authors &&
                authors.map((author) => (
                  <Tr key={author.id}>
                    <Td>{author.name}</Td>
                    <Td>{author.email ? author.email : 'Não preenchido'}</Td>
                    <Td style={{ border: 'none' }}>
                      <Image
                        src={eye}
                        alt="Icone de um olho"
                        onClick={() => handleAuthorModal(author.id)}
                      />
                    </Td>
                    <Td style={{ border: 'none' }}>
                      <Image
                        src={trash}
                        alt="Icone de uma lixeira"
                        onClick={() => handleAlertModal(author.id)}
                      />
                    </Td>
                  </Tr>
                ))}
            </TableBody>
          </Table>
        </Wrapper>
      ) : (
        <Empty>Nenhum Autor Cadastrado ):</Empty>
      )}
    </ListContainer>
  )
}
