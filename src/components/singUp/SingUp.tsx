import helpPOint from '../../assets/helpPoint.png'
import { Form, Img, Span, Input, Button, Body } from './styles'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setToken } from '../../redux/slices/authState'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authFirebase } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as yup from 'yup'

interface FormValues {
  email: string
  password: string
  confirmPassword: string
}

const schema = yup.object({
  email: yup.string()
    .email('Verifica tu correo')
    .required('Debe escribir una dirección de correo'),

  password: yup.string()
    .required('Debe escribir tu clave')
    .min(8, 'Mínimo 8 caracters de largo'),

  confirmPassword: yup.string()
    .required('Debe escribir tu clave')
    .min(8, 'Mínimo 8 caracters de largo')
}).required()

export default function SingUp () {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormValues> = formInfo => {
    createUserWithEmailAndPassword(authFirebase, formInfo.email, formInfo.password)
      .then((userCredential) => {
        console.log(userCredential)
        // dispatch(setToken(true));
        // navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.code)
      })
  }

  return (
      <Body>
        <Form onSubmit={handleSubmit(onSubmit)} >
          <Img className="" src={helpPOint} alt="companyLogo" />

          <Input
            {...register('email')}
            placeholder="email"
            type="email"
            id="email"
          />
          <Span>{errors.email?.message}</Span>

          <Input
            {...register('password')}
            placeholder="password"
            type="password"
            id="password"
          />
          <Span>{errors.password?.message}</Span>

          <Input
            {...register('confirmPassword')}
            placeholder="confirmPassword"
            type="password"
            id="confirmPassword"
          />
          <Span>{errors.confirmPassword?.message}</Span>

          {/* <Span className="" >{failedLogin && failedLogin}</Span> */}

          <Button>Sing Up</Button>
        </Form>
      </Body>
  )
}
