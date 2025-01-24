import { useState } from 'react'
import { FContainer } from './styles'

import AuthorForm from '../AuthorForm'
import BookForm from '../BookForm'
import ButtonContainer from '../ButtonContainer'

export default function FormsContainer() {
  const [isBook, setIsBook] = useState<boolean>(false)
  const [isAuthor, setIsAuthor] = useState<boolean>(false)

  const changeForm = (value: string) => {
    if (value === 'author') setIsAuthor(!isAuthor)
    if (value === 'book') setIsBook(!isBook)
  }

  return (
    <FContainer>
      <ButtonContainer changeForm={changeForm} />
      {isAuthor && <AuthorForm changeForm={changeForm} />}
      {isBook && <BookForm changeForm={changeForm} />}
    </FContainer>
  )
}
