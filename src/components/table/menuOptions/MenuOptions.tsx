import { MainDiv, LeftMenu, Sselect, CenterMenu, RightMenu, Sbutton, Sspan } from './styles'
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

  const showHideColumns = () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    setShowModal(!showModal)
  }

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

  return (
    <MainDiv>
      <LeftMenu>
        <Sselect>
          <option value="">location</option>
          <option value="">asset</option>
          <option value="">tool</option>
          <option value="">vehicle</option>
          <option value="">spare</option>
        </Sselect>

        <CenterMenu>
          advise, you didnt save it
        </CenterMenu>
      </LeftMenu>

      <RightMenu>
        <Sbutton bgColor={'green'} >
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

        <Sbutton bgColor={'orange'} Color={'black'}>
          <BsQrCode />
          <Sspan Right={'0'}>Print QR code</Sspan>
        </Sbutton>

        <Sbutton bgColor={'lightblue'} Color={'black'}>
          <FaClone />
          <Sspan Right={'0'}>Clone asset</Sspan>
        </Sbutton>

        <Sbutton bgColor={'red'} Color={'black'}>
          <FaFilePdf />
          <Sspan Right={'0'}>Print a PDF document</Sspan>
        </Sbutton>
      </RightMenu>
    </MainDiv>
  )
}
