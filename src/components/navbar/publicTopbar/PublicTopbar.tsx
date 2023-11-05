import React from 'react'

import { type Props, MainDiv, LeftSide, RightSide, Logo, Link, Button, Language } from './styles'
import { MdOutlineLanguage } from 'react-icons/md'
import helpPOint from '../../../images/helpPoint.png'

import { useAppSelector } from '../../../hooks/redux'
import { language } from './language'

import Flags from '../../languageSelector/Flags'

export default function PublicTopbar ({ Height }: Props) {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.publicWebPage.language as keyof typeof language]

  const [showHideFlags, setShowHideFlags] = React.useState(false)

  return (
    <MainDiv Height={Height}>

      <LeftSide>
        <Logo src={helpPOint} alt="helpPoint"/>
        <Link to={'/'} replace>{idiom.home}</Link>
      </LeftSide>

      <RightSide>
        <Language>
          <Button onClick={() => { setShowHideFlags(!showHideFlags) }}>
            <MdOutlineLanguage/>
          </Button>

          {showHideFlags && <Flags setShowHideFlags={setShowHideFlags}/>}
        </Language>

        <Link to={'/logIn'} replace>{idiom.logIn}</Link>
      </RightSide>

    </MainDiv>
  )
}
