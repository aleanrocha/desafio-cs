import { ButtonStyled } from './styles'

type ButtonProps = {
  text: string
  buttonType: 'button' | 'submit'
  click?: () => void
}

export default function Button(props: ButtonProps) {
  const { text, buttonType, click } = props
  return (
    <ButtonStyled type={buttonType} onClick={click}>
      {text}
    </ButtonStyled>
  )
}
