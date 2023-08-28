import { MainDiv } from './styles'
import { useAppDispatch } from '../../hooks/redux'
import { useEffect } from 'react'


export default function Dashboard () {
  const dispatch = useAppDispatch()
  useEffect(() => {

  }, [])

  return (
    <MainDiv >Dashboard
    </MainDiv>
  )
}
