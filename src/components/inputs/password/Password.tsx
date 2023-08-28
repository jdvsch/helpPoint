import { MainDiv, InputLabel, Input, ErrorMessage } from './styles'

interface Props {
  Register: { name: string }
  Placeholder: string
  Disable?: boolean
  Error?: string | undefined
}

export default function Password ({ Register, Placeholder, Disable = false, Error = undefined }: Props) {
  return (
    <MainDiv>
      <InputLabel>{ Placeholder }</InputLabel>
      <Input
        type="pasword"
        disabled = {Disable}
        placeholder={ Placeholder }
        { ...Register }
        id={Register.name}
      />
      {Boolean(Error).valueOf()
        ? <ErrorMessage>{ Error }</ErrorMessage>
        : <ErrorMessage>{ ' ' }</ErrorMessage>
      }
    </MainDiv>
  )
}
