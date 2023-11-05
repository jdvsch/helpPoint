import { type Props, MainDiv, Button, InfoTag, Company, Location, PathName } from './styles'

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

  const showHidetSidebar = () => {
    dispatch(setViewPageControl({ viewLeftMenuModal: true }))
  }

  return (
    <MainDiv Height={Height}>
      <Button onClick={() => { showHidetSidebar() }}>
        <GiHamburgerMenu />
      </Button>

      <InfoTag>
        <Company>{authState.globalStatus.companyName}</Company><Location>/Sede(envigado)</Location><PathName>{location.pathname}</PathName>
      </InfoTag>

      { authState.feedbackModal.initialState && <FeedbackModal/> }

      { authState.viewPageControl.viewLeftMenuModal && <LeftMenuModal/> }

    </MainDiv>
  )
}
