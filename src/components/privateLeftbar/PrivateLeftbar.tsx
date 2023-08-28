import { MainDiv, Menu, Button, Logo } from './styles'
import helpPOint from '../../assets/helpPoint.png'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { LANGUAGE } from '../../config/constants/language/components/privateLeftbar'
import { useNavigate } from 'react-router-dom'
import { setsidebar } from '../../redux/slices/authState'

import SingOut from '../singOut/SingOut'

export default function PrivateLeftbar () {
  const { authState } = useAppSelector(state => state)
  const dispatch = useAppDispatch()

  const tongue = authState.language
  const menuData = Object.entries(LANGUAGE[tongue])
  const navigate = useNavigate()

  const goToPage = (data: string) => {
    console.log(data)
    navigate(data)
    dispatch(setsidebar({ initialState: false }))
  }

  return (
    <MainDiv Width={'900px'}>
      <Menu>
        <Logo src={helpPOint} alt="companyLogo"/>

        {menuData.map((data) => (
          <Button key={data[0]} onClick={() => { goToPage(data[0]) }}>{data[1]}</Button>
        ))
        }
      </Menu>

      <SingOut/>
    </MainDiv>
  )
}
