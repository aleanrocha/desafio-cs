import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import Catalog from '../interfaces/Catalog'
import { Author } from '../interfaces/Author'
import { Book } from '../interfaces/Book'

const CatalogContext = createContext<Catalog | null>(null)

export const CatalogContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authors, setAuthors] = useState<Author[]>([])
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchAuthorsFromLocalStorage = () => {
      const authorsDataSaved = localStorage.getItem('formData:Authors')
      if (authorsDataSaved) {
        setAuthors(JSON.parse(authorsDataSaved))
      }
    }

    const fetchBooksFromLocalStorage = () => {
      const booksDataSaved = localStorage.getItem('formData:Books')
      if (booksDataSaved) {
        setBooks(JSON.parse(booksDataSaved))
      }
    }

    fetchAuthorsFromLocalStorage()
    fetchBooksFromLocalStorage()
  }, [])

  const addAuthorToLocalStorage = (author: Author) => {
    const newAuthors = [...authors, author]
    localStorage.setItem('formData:Authors', JSON.stringify(newAuthors))
    setAuthors(newAuthors)
  }

  const addBookToLocalStorage = (book: Book) => {
    const newBooks = [...books, book]
    localStorage.setItem('formData:Books', JSON.stringify(newBooks))
    setBooks(newBooks)
  }

  const removeBookById = (id: string) => {
    const filteredBooks = books.filter((bk) => bk.id !== id)
    localStorage.setItem('formData:Books', JSON.stringify(filteredBooks))
    setBooks(filteredBooks)
  }

  const removeAuthorById = (id: string) => {
    const filteredAuthors = authors.filter((ath) => ath.id !== id)
    const filteredBooks = books.filter((bk) => bk.author_id !== id)
    localStorage.setItem('formData:Authors', JSON.stringify(filteredAuthors))
    localStorage.setItem('formData:Books', JSON.stringify(filteredBooks))
    setAuthors(filteredAuthors)
    setBooks(filteredBooks)
  }

  return (
    <CatalogContext.Provider
      value={{
        authors,
        books,
        addAuthorToLocalStorage,
        addBookToLocalStorage,
        removeAuthorById,
        removeBookById,
      }}
    >
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalogContext = () => {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error('useCatalogContext must be inside a CatalogContextProvider')
  }
  return context
}
