import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '../Button'
import {
  Form,
  FormContainer,
  FormTitle,
  Input,
  Label,
  CloseForm,
  Select,
  Option,
} from '../AuthorForm/styles'

import { useCatalogContext } from '../../context/CatalogContext'
import Generate from '../../utils/Generate'

interface BookFormProps {
  changeForm: (value: string) => void
}

const schema = z.object({
  name: z.string().trim().min(3, { message: 'Nome do livro é obrigatório' }),
  pages: z.string().optional(),
  author_id: z.string().refine((val) => val !== '', {
    message: 'Selecione ou crie um autor para o livro',
  }),
})

type FormData = z.infer<typeof schema>

export default function BookForm(props: BookFormProps) {
  const { changeForm } = props
  const { authors, addBookToLocalStorage } = useCatalogContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    addBookToLocalStorage({
      ...data,
      id: Generate.Id(),
      author_id: data.author_id ? data.author_id : '',
    })
    reset()
    changeForm('book')
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CloseForm onClick={() => changeForm('book')}>X</CloseForm>
        <FormTitle>Construa sua História 📚</FormTitle>
        <Label>
          Nome:
          <Input
            type="text"
            placeholder="Digite o nome do livro"
            {...register('name')}
            $isError={errors.name?.message ? true : false}
          />
        </Label>
        {errors.name && <p>{errors.name.message}</p>}
        <Label>
          Páginas:
          <Input
            type="number"
            placeholder="Digite a quantidade de páginas"
            {...register('pages')}
            $isError={errors.pages?.message ? true : false}
          />
        </Label>
        {errors.name && <p>{errors.pages?.message}</p>}
        <Label>
          Selecionar autor
          <Select {...register('author_id')} defaultValue="">
            <Option value="" disabled>
              Escolher
            </Option>
            {authors.length > 0 &&
              authors.map((author) => (
                <Option key={author.id} value={author.id}>
                  {author.name}
                </Option>
              ))}
          </Select>
        </Label>
        {errors.author_id && <p>{errors.author_id?.message}</p>}
        <Button buttonType="submit" text="Criar" />
      </Form>
    </FormContainer>
  )
}
