import { Author } from './Author'
import { Book } from './Book'

export default interface Catalog {
  authors: Author[]
  books: Book[]
  addAuthorToLocalStorage: (author: Author) => void
  addBookToLocalStorage: (book: Book) => void
  removeAuthorById: (id: string) => void
  removeBookById: (id: string) => void
}
