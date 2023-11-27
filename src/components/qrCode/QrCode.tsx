import { Button, Span } from './styles'
import { language } from './language'

import React from 'react'
import QRCode from 'react-qr-code'
import ReactToPrint from 'react-to-print'
import { useAppSelector } from '../../hooks/redux'

interface Props {
  QRvalue?: string
}

export default function QrCode ({ QRvalue = 'www.AssetsMinders.com' }: Props) {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const printQR = React.useRef(null)

  return (
  <ReactToPrint
    trigger={() =>
      <Button>
        <QRCode
        ref={printQR}
        bgColor = 'transparent'
        fgColor = 'green'
        style={{ height: '100px', width: '100px' }}
        value={QRvalue} />
        <Span>{idiom.print}</Span>
    </Button>}
    content={() => printQR.current}
  />
  )
}
