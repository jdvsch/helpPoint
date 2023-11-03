import { MainDiv, Menu, Button, Logo } from './styles'
import helpPOint from '../../../images/helpPoint.png'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { MenuLinks } from '../../../config/language/components/privateLeftbar'
import { useNavigate } from 'react-router-dom'
import { setLeftSidebar, setViewPageControl } from '../../../redux/slices/authState'

import SingOut from '../../singOut/SingOut'

export default function LeftMenuModal () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const idiom = authState.globalStatus.language as keyof typeof MenuLinks
  const menuData = Object.entries(MenuLinks[idiom])
  const navigate = useNavigate()

  const goToPage = (data: string) => {
    // console.log(data)
    navigate(data)
    dispatch(setLeftSidebar({ initialState: false, selected: data }))
    dispatch(setViewPageControl({ mainCategory: data, subcategory: 'tableView' }))
  }

  const closeLeftMenu = () => {
    dispatch(setLeftSidebar({ initialState: false }))
  }

  return (
    <MainDiv>
      <Menu>
        <Logo onClick={closeLeftMenu} src={helpPOint} alt="helpPointLogo"/>

        {menuData.map((data) => (
          <Button
            key={data[0]}
            onClick={() => { goToPage(data[0]) }}>{data[1]}
          </Button>
        ))}
      </Menu>

      <SingOut/>
    </MainDiv>
  )
}
