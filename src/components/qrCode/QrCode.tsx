import { MainDiv, Button } from './styles'

import React from 'react'
import QRCode from 'react-qr-code'
import ReactToPrint from 'react-to-print'
import { BiPrinter } from 'react-icons/bi'

export default function QrCode () {
  const printQR = React.useRef(null)

  return (
    <MainDiv>
        <QRCode
        ref={printQR}
        bgColor = 'transparent'
        fgColor = 'green'
        style={{ height: '60%', width: '60%' }}
        value="www.anquimico.com" />

        <ReactToPrint
        trigger={() => <Button><BiPrinter /></Button>}
        content={() => printQR.current}
        />

    </MainDiv>
  )
}
