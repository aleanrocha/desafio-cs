import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '../Button'
import {
  Form,
  FormContainer,
  FormTitle,
  Input,
  Label,
  CloseForm,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCatalogContext } from '../../context/CatalogContext'
import Generate from '../../utils/Generate'

interface AuthorFormProps {
  changeForm: (valeu: string) => void
}

const schema = z.object({
  name: z.string().min(3, { message: 'Nome do autor é obrigatório' }),
  email: z
    .string()
    .refine((val) => val === '' || z.string().email().safeParse(val).success, {
      message: 'E-mail inválido',
    }),

})

type FormData = z.infer<typeof schema>

export default function AuthorForm(props: AuthorFormProps) {
  const { changeForm } = props
  const { addAuthorToLocalStorage } = useCatalogContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    addAuthorToLocalStorage({ ...data, id: Generate.Id() })
    reset()
    changeForm('author')
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CloseForm onClick={() => changeForm('author')}>X</CloseForm>
        <FormTitle>Crie seu legado 📝</FormTitle>
        <Label>
          Autor:
          <Input
            type="text"
            placeholder="Digiteo nome do autor"
            {...register('name')}
            $isError={errors.name?.message ? true : false}
          />
        </Label>
        {errors && <p>{errors.name?.message}</p>}
        <Label>
          E-mail:
          <Input
            type="email"
            placeholder="Digite o seu e-mail"
            {...register('email')}
            $isError={errors.email?.message ? true : false}
          />
        </Label>
        {errors && <p>{errors.email?.message}</p>}
        <Button buttonType="submit" text="Criar" />
      </Form>
    </FormContainer>
  )
}
