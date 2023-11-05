import { MainDiv, Menu, Button, Logo } from './styles'
import { language } from './language'
import helpPOint from '../../../images/helpPoint.png'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useNavigate } from 'react-router-dom'
import { setAccessPermits, setViewPageControl } from '../../../redux/slices/authState'

import SingOut from '../../singOut/SingOut'

export default function LeftMenuModal () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const menuData = authState.accessPermits.menuOptions
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const navigate = useNavigate()

  const goToPage = (data: string) => {
    // console.log(data)
    navigate(data)
    dispatch(setAccessPermits({ initialState: false, selected: data }))
    dispatch(setViewPageControl({ mainCategory: data, subcategory: 'tableView' }))
  }

  const closeLeftMenu = () => {
    dispatch(setViewPageControl({ viewLeftMenuModal: false }))
  }

  return (
    <MainDiv>
      <Menu>
        <Logo onClick={closeLeftMenu} src={helpPOint} alt="helpPointLogo"/>

        {menuData.map((data) => (
          <Button
            key={data}
            onClick={() => { goToPage(idiom.path[data]) }}>{idiom.label[data]}
          </Button>
        ))}
      </Menu>

      <SingOut/>
    </MainDiv>
  )
}
