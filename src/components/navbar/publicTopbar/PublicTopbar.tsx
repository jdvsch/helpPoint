import { type Props, MainDiv, LeftSide, RightSide, Logo, Link, Button } from './styles'
import { MdOutlineLanguage } from 'react-icons/md'

import helpPOint from '../../../images/helpPoint.png'

export default function PublicTopbar ({ Height }: Props) {
  return (
    <MainDiv Height={Height}>

      <LeftSide>
        <Logo src={helpPOint} alt="helpPoint"/>
        <Link to={'/'} replace>Home</Link>
      </LeftSide>

      <RightSide>
        <Button>
          <MdOutlineLanguage/>
        </Button>

        <Link to={'/logIn'} replace>Login</Link>
      </RightSide>

    </MainDiv>
  )
}
