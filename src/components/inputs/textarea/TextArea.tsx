import { MainDiv, InputLabel, Textarea, ErrorMessage } from './styles'

interface Props {
  Register: { name: string }
  Placeholder: string
  Error?: string | undefined
}

export default function TextArea ({ Register, Placeholder, Error = undefined }: Props) {
  return (
    <MainDiv>
      <InputLabel>{ Placeholder }</InputLabel>
      <Textarea
        { ...Register }
        id={Register.name}
        rows={2}
      />
      {Boolean(Error).valueOf()
        ? <ErrorMessage>{ Error }</ErrorMessage>
        : <ErrorMessage>{ ' ' }</ErrorMessage>
      }
    </MainDiv>
  )
}
