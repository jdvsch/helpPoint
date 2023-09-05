import { OuterDiv, InnerDiv, AlertMessage, AlertDiv, AlertImg, ButtonAlert } from './styles'
import AlertSign from '../../assets/AlertSign.png'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setModal } from '../../redux/slices/authState'

export default function Modal () {
  const { authState } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const ModalData = authState.modal

  const toggle = () => {
    dispatch(setModal({
      initialState: false,
      type: '',
      message: '',
      style: {}
    }))
  }

  const Warning = (
    <AlertDiv>
      <AlertMessage>
        <AlertImg src={AlertSign} alt="warning" />
        {ModalData.message}
      </AlertMessage>
      <ButtonAlert onClick={toggle}>Close</ButtonAlert>
    </AlertDiv>
  )

  return (
    <OuterDiv >
      <InnerDiv >
        {ModalData.type === 'warning' && Warning}
      </InnerDiv>
    </OuterDiv>
  )
}
