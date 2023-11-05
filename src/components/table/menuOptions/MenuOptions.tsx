import { MainDiv, LeftMenu, Sselect, RightMenu, Sbutton, Sspan } from './styles'
import { BsQrCode, BsDatabaseFillAdd } from 'react-icons/bs'
import { RiFileExcel2Fill, RiTableFill } from 'react-icons/ri'
import { FaClone } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'

import { type RowData, type Table } from '@tanstack/react-table'
import { useAppDispatch } from '../../../hooks/redux'
import { setFeedbackModal } from '../../../redux/slices/authState'
import { ExcelOutput } from '../exportToExcel/ExcelOutput'

interface Props<T extends RowData> {
  table: Table<T>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface Headers {
  header: string
}[]

interface ExcelData {
  id?: string
}[]

export default function MenuOptions<T extends RowData> ({
  table, showModal, setShowModal
}: Props<T>) {
  const dispatch = useAppDispatch()

  // HANDLE A NEW ENTRY ON DATABASE
  const createNewEntry = () => {

  }

  // SHOW OR HIDE MENU WITH TABLE HEADERS
  const showHideColumns = () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    setShowModal(!showModal)
  }

  // EXPORT SELECTED ROWS TO EXCEL
  const exportDataExcel = () => {
    if (table.getSelectedRowModel().flatRows.length === 0) {
      return dispatch(setFeedbackModal({
        initialState: true,
        type: 'warning',
        message: 'you shoud atleast choice one divice'
      }))
    }

    const Header: Headers[] = []
    table.getHeaderGroups()[0].headers.map((data) => {
      if (data.id !== 'select') {
        Header.push({ header: data.id })
      }
      return Header
    })

    const Data: ExcelData[] = []

    table.getSelectedRowModel().flatRows.map((data) => {
      return Data.push(data.original as ExcelData)
    })

    ExcelOutput(Header, Data, 'Assets')
  }

  // PRINT QRCODE SELECTED
  const printQRcode = () => {

  }

  // CLONE OONE REGISTER ON DATABASE
  const cloneRegister = () => {

  }

  // PRINT A PDF DOCUMENTS OF SELECTED ROWS
  const printPDF = () => {

  }

  return (
    <MainDiv>
      <LeftMenu>
        <Sselect>
          <option key={1} value={1}>todas las sedes</option>
          <option key={2} value={1}>sede 1</option>
          <option key={3} value={2}>sede 2</option>
        </Sselect>

        <Sselect>
          <option key={2} value={2}>asset</option>
          <option key={1} value={1}>location</option>
          <option key={3} value={3}>tool</option>
          <option key={5} value={5}>spare</option>
          <option key={4} value={4}>vehicle</option>
        </Sselect>
      </LeftMenu>

      <RightMenu>
        <Sbutton bgColor={'green'} onClick={createNewEntry}>
          <BsDatabaseFillAdd />
          <Sspan Right={'0'}>Create a new asset</Sspan>
        </Sbutton>

        <Sbutton bgColor={'blue'} Color={'black'} onClick={showHideColumns}>
          <RiTableFill />
          <Sspan Right={'0'}>Show or hide columns</Sspan>
        </Sbutton>

        <Sbutton bgColor={'green'} Color={'black'} onClick={exportDataExcel}>
          <RiFileExcel2Fill />
          <Sspan Right={'0'}>Export to excel</Sspan>
        </Sbutton>

        <Sbutton bgColor={'orange'} Color={'black'} onClick={printQRcode}>
          <BsQrCode />
          <Sspan Right={'0'}>Print QR code</Sspan>
        </Sbutton>

        <Sbutton bgColor={'lightblue'} Color={'black'} onClick={cloneRegister}>
          <FaClone />
          <Sspan Right={'0'}>Clone asset</Sspan>
        </Sbutton>

        <Sbutton bgColor={'red'} Color={'black'} onClick={printPDF}>
          <FaFilePdf />
          <Sspan Right={'0'}>Print a PDF document</Sspan>
        </Sbutton>
      </RightMenu>
    </MainDiv>
  )
}
