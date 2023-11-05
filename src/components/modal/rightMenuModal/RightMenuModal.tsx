import React from 'react'
import { MainDiv, Sbutton, List } from './styles'
import { GoSidebarCollapse } from 'react-icons/go'

interface Props {
  children: React.ReactNode
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RightMenuModal ({ children, showModal, setShowModal }: Props) {
  const showHideColumns = () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    setShowModal(!showModal)
  }

  return (
    <MainDiv >
      <Sbutton onClick={showHideColumns}><GoSidebarCollapse /></Sbutton>
      <List>{children}</List>
    </MainDiv>
  )
}
