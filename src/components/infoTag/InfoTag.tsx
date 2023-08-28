import { Main, Clock, Span } from './styles'

interface IT {
  title: string
  value: number
  searchOption: boolean
}

export default function InfoTag ({ data }: { data: IT }) {
  return (
    <Main>
      <Span>{data.title}</Span>
      <Clock cursorType={data.searchOption}>{data.value}</Clock>
    </Main>
  )
}
