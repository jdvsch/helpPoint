import { MainDiv, InputLabel, SelectOptions, ErrorMessage } from './styles'

interface Props {
  Register: { name: string }
  Placeholder: string
  Disable?: boolean
  Error?: string | undefined
  defaultValue?: string
  selectOptions: Array<{
    value: string
  }>
}

export default function Select ({ Register, Placeholder, Disable = false, Error = undefined, selectOptions }: Props) {
  return (
    <MainDiv>
      <InputLabel>{ Placeholder }</InputLabel>
      <SelectOptions
        disabled = {Disable}
        { ...Register }
        id={Register.name}
      >
        {selectOptions.map(data => (
        <option key={data.value} value={data.value} >{data.value}</option>
        ))}
      </SelectOptions>
      {Boolean(Error).valueOf()
        ? <ErrorMessage>{ Error }</ErrorMessage>
        : <ErrorMessage>{ ' ' }</ErrorMessage>
      }
    </MainDiv>
  )
}
