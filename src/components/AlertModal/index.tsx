import Button from '../Button'
import { Modal, Text, Wrapper } from './styles'

interface AlertModalProps {
  type: 'author' | 'book'
  confirm: () => void
  cancel: () => void
}

export default function AlertModal(props: AlertModalProps) {
  const { type, confirm, cancel } = props
  return (
    <Modal>
      <Wrapper>
        <span>Cuidado!</span>
        {type === 'author' ? (
          <Text>
            Ao excluir um Autor você vai excluir todos os livros relacionados a
            ele, tem certeza que deseja excluir?
          </Text>
        ) : (
          <Text>Tem certeza que deseja excluir o livro?</Text>
        )}
        <div>
          <Button buttonType="button" click={() => cancel()} text="Não" />
          <Button buttonType="button" click={() => confirm()} text="Sim" />
        </div>
      </Wrapper>
    </Modal>
  )
}
