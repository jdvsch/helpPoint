// fakeAPI
import { building } from '../../../fakeAPIdata/assets'
import { language } from './language'

import { MainDiv, InputLabel, Input, ErrorMessage } from './styles'

import { useAppSelector } from '../../../hooks/redux'

import React from 'react'

interface Props {
  API: string
  Disable?: boolean
  Placeholder: string
  Register: any
  setIsCodeUnique: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TextValidator ({ API, Disable = false, Placeholder, Register, setIsCodeUnique }: Props) {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const [Error, setError] = React.useState('')

  const checkData = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value !== '') {
      // aqui ejecuto la busqueda en la base de datos de esa referencia usando API, de ser positiva se agrega
      if (building.includes(e.target.value)) {
        setIsCodeUnique(false)
        setError(idiom.warning)
      } else {
        setIsCodeUnique(true)
        setError('')
      }
    }
  }

  const { name, ref, onChange } = Register

  return (
    <MainDiv>
      <InputLabel>{ Placeholder }</InputLabel>
      <Input
        type="text"
        onChange={onChange}
        ref={ref}
        name={name}
        onBlur={checkData}
        id={Register.name}
        disabled={Disable}
      />
      {Boolean(Error).valueOf() && <ErrorMessage>{ Error }</ErrorMessage> }
    </MainDiv>
  )
}
