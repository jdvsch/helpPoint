import { type Props, MainDiv, Button, Location, Span } from './styles'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppDispatch } from '../../../hooks/redux'
import { useLocation } from 'react-router-dom'
import { setLeftSidebar } from '../../../redux/slices/authState'

export default function PrivateTopbar ({ Height }: Props) {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const showHidetSidebar = () => {
    dispatch(setLeftSidebar({ initialState: true }))
  }

  return (
    <MainDiv Height={Height}>
      <Button onClick={() => { showHidetSidebar() }}>
        <GiHamburgerMenu />
      </Button>

      <Location>
        Company name(exito)/Sede(envigado)<Span>{location.pathname}</Span>
      </Location>
    </MainDiv>
  )
}
