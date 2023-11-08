import { MainDiv, Menu, Button, Logo } from './styles'
import { language } from './language'
import helpPOint from '../../../images/helpPoint.png'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useNavigate } from 'react-router-dom'
import { setViewPageControl } from '../../../redux/slices/authState'

import SingOut from '../../singOut/SingOut'

export default function LeftMenuModal () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const menuData = authState.accessPermits.menuOptions
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const path = language['Access' as keyof typeof language]
  const navigate = useNavigate()

  const goToPage = (data: string) => {
    if (authState.viewPageControl.isDirthy) {
      // save before leave
    } else {
      navigate(data)
      dispatch(setViewPageControl({
        menuOptionSelected: data,
        submenuOptionsSelected: language.subcomponent[data as keyof typeof language.subcomponent],
        tableColumns: '',
        tableData: '',
        viewLeftMenuModal: false
      }))
    }
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
            key={data} onClick={() => { goToPage(path[data as keyof typeof path]) }}>
              {idiom[data as keyof typeof idiom]}
          </Button>
        ))}
      </Menu>

      <SingOut/>
    </MainDiv>
  )
}
