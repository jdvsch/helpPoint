import { type Props, MainDiv, Button, InfoTag, Company, PathName, PathType } from './styles'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useLocation } from 'react-router-dom'
import { setViewPageControl } from '../../../redux/slices/authState'

import FeedbackModal from '../../modal/alertModal/FeedbackModal'
import LeftMenuModal from '../../modal/leftMenuModal/LeftMenuModal'

export default function PrivateTopbar ({ Height }: Props) {
  const dispatch = useAppDispatch()
  const { authState } = useAppSelector(state => state)
  const path = useLocation()

  const showHidetSidebar = () => {
    dispatch(setViewPageControl({ viewLeftMenuModal: true }))
  }

  const pathType = authState.viewPageControl.tableDefaultToRender

  return (
    <MainDiv Height={Height}>
      <Button onClick={() => { showHidetSidebar() }}>
        <GiHamburgerMenu />
      </Button>

      <InfoTag>
        <span>
          <Company>{authState.globalStatus.companyName}</Company>
          <PathName> {path.pathname}</PathName>
          {(pathType !== 'dashboard' && pathType !== '') &&
            <PathType> /{authState.viewPageControl.tableDefaultToRender}</PathType>}
        </span>
      </InfoTag>

      { authState.feedbackModal.initialState && <FeedbackModal/> }

      { authState.viewPageControl.viewLeftMenuModal && <LeftMenuModal/> }

    </MainDiv>
  )
}
