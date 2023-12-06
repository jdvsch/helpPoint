import { MainDiv, GoBackButton, SaveButton } from './styles'
import { IoBackspace } from 'react-icons/io5'

import { language } from './language'
import { useAppSelector } from '../../../hooks/redux'

export default function SaveMenu () {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const windowWidth = authState.globalStatus.windowWidth

  const saveBeforeLeave = () => {

  }
  // esto se recibe por props!!!
  const isDirty = true
  return (
    <MainDiv windowWidth={windowWidth}>
      {windowWidth <= 900 &&
      <GoBackButton>
        <IoBackspace />
      </GoBackButton>
      }

      <SaveButton onClick={saveBeforeLeave} isDirty={isDirty}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {isDirty ? idiom.save : idiom.withoutChanges}
      </SaveButton>
    </MainDiv>
  )
}
