import { MainDiv, InputLabel, Input, ErrorMessage } from './styles'

import React from 'react'

interface Props {
  Register: any
  Placeholder: string
  Disable?: boolean
  setIsCodeUnique: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TextValidator ({ Register, Placeholder, setIsCodeUnique }: Props) {
  const [Error, setError] = React.useState('')

  const checkData = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    // console.log(e.target.value)
    if (e.target.value !== '') {
      // aqui ejecuto la busqueda en la base de datos de esa referencia, de ser positiva se agrega
      if (true) {
        setIsCodeUnique(true)
      }
      // setError('error message')
    } else {
      setIsCodeUnique(false)
      setError('')
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
      />
      {Boolean(Error).valueOf()
        ? <ErrorMessage>{ Error }</ErrorMessage>
        : <ErrorMessage>{ ' ' }</ErrorMessage>
      }
    </MainDiv>
  )
}
