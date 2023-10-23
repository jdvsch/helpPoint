import React from 'react'

import { MainDiv, Sp, ButtonAlert } from './styles'
import { TbFaceIdError } from 'react-icons/tb'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { TiWarning } from 'react-icons/ti'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setFeedbackModal } from '../../../redux/slices/authState'

export default function FeedbackModal () {
  const { authState } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const ModalData = authState.feedbackModal
  const CloseModal = () => {
    dispatch(setFeedbackModal({
      initialState: false,
      type: '',
      message: '',
      style: {}
    }))
  }

  const toggle = () => {
    CloseModal()
  }

  React.useEffect(() => {
    setTimeout(() => {
      CloseModal()
    }, 5000)
  }, [])

  const bgColor = ModalData.type === 'succes' ? 'green' : ModalData.type === 'warning' ? 'yellow' : 'red'
  const Color = ModalData.type === 'succes' ? 'white' : ModalData.type === 'warning' ? 'Red' : 'white'
  const icon = ModalData.type === 'succes' ? <IoCheckmarkDoneCircleSharp /> : ModalData.type === 'warning' ? <TiWarning /> : <TbFaceIdError />

  return (
    <MainDiv bgColor={ bgColor }>
      <Sp>{ModalData.message}</Sp>
      <ButtonAlert Color={ Color } onClick={toggle}>{icon}</ButtonAlert>
    </MainDiv>
  )
}
