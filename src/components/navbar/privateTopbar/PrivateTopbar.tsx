import { type Props, MainDiv, Button, InfoTag, Company, Location, PathName, PathType } from './styles'
import { language } from './languages'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useLocation } from 'react-router-dom'
import { setViewPageControl } from '../../../redux/slices/authState'

import FeedbackModal from '../../modal/alertModal/FeedbackModal'
import LeftMenuModal from '../../modal/leftMenuModal/LeftMenuModal'

export default function PrivateTopbar ({ Height }: Props) {
  const dispatch = useAppDispatch()
  const { authState } = useAppSelector(state => state)
  const location = useLocation()
  const idiom = language[authState.globalStatus.language as keyof typeof language]

  const showHidetSidebar = () => {
    dispatch(setViewPageControl({ viewLeftMenuModal: true }))
  }

  const headquarters = authState.viewPageControl.activeHeadquarters === 'allLocations'
    ? idiom.allLocations
    : authState.viewPageControl.activeHeadquarters

  return (
    <MainDiv Height={Height}>
      <Button onClick={() => { showHidetSidebar() }}>
        <GiHamburgerMenu />
      </Button>

      <InfoTag>
        <span>
          <Company>{authState.globalStatus.companyName}</Company>
          <Location> /{headquarters}</Location>
          <PathName> {location.pathname}</PathName>
          <PathType> /{authState.viewPageControl.tableDefaultToRender}</PathType>
        </span>
      </InfoTag>

      { authState.feedbackModal.initialState && <FeedbackModal/> }

      { authState.viewPageControl.viewLeftMenuModal && <LeftMenuModal/> }

    </MainDiv>
  )
}
