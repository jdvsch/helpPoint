import { MainDiv, Menu, Button, Logo } from './styles'
import helpPOint from '../../../images/helpPoint.png'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { LANGUAGE } from '../../../config/constants/language/components/privateLeftbar'
import { useNavigate } from 'react-router-dom'
import { setLeftSidebar, setViewPageControl } from '../../../redux/slices/authState'

import SingOut from '../../singOut/SingOut'

export default function LeftMenuModal () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const idiom = authState.globalStatus.language
  const menuData = Object.entries(LANGUAGE[idiom])
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
    <MainDiv Width={'900px'}>
      <Menu>
        <Logo onClick={closeLeftMenu} src={helpPOint} alt="helpPointLogo"/>

        {menuData.map((data) => (
          <Button
            key={data[0]}
            className={authState.leftSidebar.menuOptionSelected === data[0] ? 'active' : '' }
            onClick={() => { goToPage(data[0]) }}>{data[1]}
          </Button>
        ))
        }
      </Menu>

      <SingOut/>
    </MainDiv>
  )
}
