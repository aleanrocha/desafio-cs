import Button from '../Button'
import { ButtonContent } from './styles'

interface ButtonContainerProps {
  changeForm: (valeu: string) => void
}

export default function ButtonContainer(props: ButtonContainerProps) {
  const { changeForm } = props
  return (
    <ButtonContent>
      <Button
        buttonType="button"
        text="Criar Autor"
        click={() => changeForm('author')}
      />
      <Button
        buttonType="button"
        text="Criar Livro"
        click={() => changeForm('book')}
      />
    </ButtonContent>
  )
}
