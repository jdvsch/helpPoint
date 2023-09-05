import { MainDiv, Menu, Button, Logo } from './styles'
import helpPOint from '../../assets/helpPoint.png'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { LANGUAGE } from '../../config/constants/language/components/privateLeftbar'
import { useNavigate } from 'react-router-dom'
import { setSidebar } from '../../redux/slices/authState'

import SingOut from '../singOut/SingOut'

export default function PrivateLeftbar () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const idiom = authState.pageStatus.language
  const menuData = Object.entries(LANGUAGE[idiom])
  const navigate = useNavigate()

  const goToPage = (data: string) => {
    // console.log(data)
    navigate(data)
    dispatch(setSidebar({ initialState: false }))
  }

  const closeLeftMenu = () => {
    dispatch(setSidebar({ initialState: false }))
  }

  return (
    <MainDiv Width={'900px'}>
      <Menu>
        <Logo onClick={closeLeftMenu} src={helpPOint} alt="companyLogo"/>

        {menuData.map((data) => (
          <Button key={data[0]} onClick={() => { goToPage(data[0]) }}>{data[1]}</Button>
        ))
        }
      </Menu>

      <SingOut/>
    </MainDiv>
  )
}
