import { MainDiv, Button } from './styles'
import { language } from './language'

import DropImage from '../../inputs/dropImage/DropImage'

import { useAppSelector, useAppDispatch } from '../../../hooks/redux'
import { setViewPageControl } from '../../../redux/slices/authState'

export default function PrivateLeftMenu () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const list = Object.entries(idiom[authState.viewPageControl.tableDefaultToRender as keyof typeof idiom])

  const changeView = (e: string) => {
    e === 'general'
      ? dispatch(setViewPageControl({ viewControl: authState.viewPageControl.tableDefaultToRender }))
      : dispatch(setViewPageControl({ viewControl: e }))
  }
  return (
    <MainDiv>
      <DropImage />
      {list.map(data => (
        <Button key={data[0]} onClick={() => { changeView(data[0]) } }>{data[1]}</Button>
      ))}
    </MainDiv>
  )
}
