// fakeAPI
import { userSettup } from '../../fakeAPIdata/loginData'

/* eslint-disable @typescript-eslint/no-misused-promises */
import { MainDiv, Form, Img, Span, Input, Button, Div, Icon } from './styles'
import helpPOint from '../../images/helpPoint.png'

import React from 'react'
import { language } from './language'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setGlobalStatus, setAccessPermits, setLoader } from '../../redux/slices/authState'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authFirebase } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2'
import * as yup from 'yup'

interface FormValues {
  email: string
  password: string
}

export default function SignIn () {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.publicWebPage.language as keyof typeof language]

  const [loginError, setLoginError] = React.useState('')
  const [changeIcon, setChangeIcon] = React.useState<'password' | 'text'>('password')

  const dispatch = useAppDispatch()

  const schema = yup.object({
    email: yup.string()
      .email(idiom.shemaEmailEmail)
      .required(idiom.shemaEmailRequired),

    password: yup.string()
      .required(idiom.shemaPasswordRequired)
      .min(8, idiom.shemaPasswordMin)
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const showHidePassword = () => {
    changeIcon === 'password' ? setChangeIcon('text') : setChangeIcon('password')
  }

  const onSubmit: SubmitHandler<FormValues> = formInfo => {
    dispatch(setLoader({ loading: true }))
    signInWithEmailAndPassword(authFirebase, formInfo.email, formInfo.password)
      .then((userCredential) => {
        // console.log(userCredential.user)
        // estos datos deben de venir de la API
        dispatch(setGlobalStatus(userSettup.GlobalStatus))
        dispatch(setAccessPermits(userSettup.accessPermits))
      })
      .catch(() => {
        // console.log(err.code)
        setLoginError('Check your user / password')
      })
      .finally(() => { dispatch(setLoader({ loading: false })) })
  }

  return (
    <MainDiv>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Img src={helpPOint} alt="companyLogo" />

        <Input
          {...register('email')}
          placeholder={idiom.email}
          type="email"
          id="email"
        />
        <Span>{errors.email?.message}</Span>

        <Div>
          <Input
            {...register('password')}
            placeholder={idiom.password}
            type={changeIcon}
            id="password"
            // onFocus={() => setViewControl(true)}
            // onBlur={() => setViewControl(false)}
          />
          <Icon onClick={showHidePassword} openClose={changeIcon} >
            {changeIcon === 'password' ? <HiMiniEyeSlash/> : <HiMiniEye/> }
          </Icon>
        </Div>

        <Span>{errors.password?.message}</Span>

        <Span className="" >{Boolean(loginError) && loginError}</Span>

        <Button>{idiom.logIn}</Button>
      </Form>
    </MainDiv>
  )
}
