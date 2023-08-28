import { MainDiv } from './styles'
import MenuBuilder from './menuBuilder/MenuBuilder'

import { useAppSelector } from '../../hooks/redux'

export default function PrivateRightbar () {
  const { authState } = useAppSelector(state => state)
  const menuData = authState.navbar.rightMenu

  return (
    <MainDiv>
        {menuData.map((item, index) => {
          return <MenuBuilder item={item} key={index} />
        })}
    </MainDiv>
  )
}
