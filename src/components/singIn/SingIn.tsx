import { MainDiv, Form, Img, Span, Input, Button, Div, Icon } from './styles'
import helpPOint from '../../assets/helpPoint.png'

import React from 'react'
import { LANGUAGE } from '../../config/constants/language/publicPages/singIn'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setPageStatus, setSidebar } from '../../redux/slices/authState'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authFirebase } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'
import * as yup from 'yup'

interface FormValues {
  email: string
  password: string
}

type SeePassword = [string, boolean]

const schema = yup.object({
  email: yup.string()
    .email('Write your email again')
    .required('You must write an email address'),

  password: yup.string()
    .required('You must write your password')
    .min(8, 'Minimum 8 characters long')
}).required()

export default function SignIn () {
  const { authState } = useAppSelector(state => state)
  const idiom = authState.pageStatus.language
  const SignInData = LANGUAGE[idiom].singIn

  const [loginError, setLoginError] = React.useState('')
  const [showPassword, setShowPassword] = React.useState<SeePassword>(['password', false])

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
    signInWithEmailAndPassword(authFirebase, formInfo.email, formInfo.password)
      .then((userCredential) => {
        // console.log(userCredential)
        dispatch(setPageStatus({ logged: true, language: 'English', theme: 'light', token: userCredential.user.accessToken, user: userCredential.user.uid, windowWidth: window.innerWidth }))
        dispatch(setSidebar({ menuOptions: ['dashboard', 'allAssets', 'assets', 'tools'] }))
      })
      .catch(() => {
        // console.log(err.code)
        setLoginError('Check your user / password')
      })
  }

  return (
    <MainDiv>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Img className="" src={helpPOint} alt="companyLogo" />

        <Input
          {...register('email')}
          placeholder={SignInData.email}
          type="email"
          id="email"
        />
        <Span>{errors.email?.message}</Span>

        <Div>
          <Input
            {...register('password')}
            placeholder={SignInData.password}
            type={showPassword[0]}
            id="password"
            onFocus={() => { setShowPassword([showPassword[0], true]) }}
            onBlur={() => { setShowPassword([showPassword[0], false]) }}
          />
          <Icon
          onPointerEnter={() => { setShowPassword(['text', showPassword[1]]) }}
          onPointerLeave={() => { setShowPassword(['password', showPassword[1]]) }}
          >
            {showPassword[1] &&
            <>
            {
              showPassword[0] === 'text'
                ? <RiEyeLine size="25px" color="green" />
                : <RiEyeCloseLine size="25px" color="orange" />
            }
            </>
            }
          </Icon>
        </Div>

        <Span>{errors.password?.message}</Span>

        <Span className="" >{Boolean(loginError) && loginError}</Span>

        <Button>{SignInData.LogIn}</Button>
      </Form>
    </MainDiv>
  )
}
