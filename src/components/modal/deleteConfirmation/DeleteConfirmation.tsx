import React from 'react'
import { MainDiv, Message, Confirmation, Button } from './styles'
import { language } from './language'

import { useAppSelector } from '../../../hooks/redux'

export default function DeleteConfirmation () {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]

  const actionTrigger = (e) => {
    console.log(e)
  }

  return (
    <MainDiv>
        <>
            <Message>{idiom.warning}</Message>
            <Confirmation>
                <Button onClick={() => actionTrigger('no')}>{idiom.no}</Button>
                <Button onClick={() => actionTrigger('yes')}>{idiom.yes}</Button>
            </Confirmation>
        </>
    </MainDiv>
  )
}
