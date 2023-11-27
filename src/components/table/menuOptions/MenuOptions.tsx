import { MainDiv, LeftMenu, Sselect, RightMenu, Sbutton, Sspan } from './styles'
import { BsQrCode, BsDatabaseFillAdd } from 'react-icons/bs'
import { RiFileExcel2Fill, RiTableFill } from 'react-icons/ri'
import { FaClone } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import { language } from './language'

import { type RowData, type Table } from '@tanstack/react-table'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setFeedbackModal, setViewPageControl } from '../../../redux/slices/authState'
import { ExcelOutput } from '../exportToExcel/ExcelOutput'

interface Props<T extends RowData> {
  table: Table<T>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface Headers {
  header: string
}

interface ExcelData {
  id?: string
}

export default function MenuOptions<T extends RowData> ({
  table, showModal, setShowModal
}: Props<T>) {
  const dispatch = useAppDispatch()
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  const menuOptionSelected = authState.viewPageControl.menuOptionsSelected
  const locationSelect = authState.accessPermits.submenuOptions[menuOptionSelected].locations
  // const typeOfRecord = authState.accessPermits.submenuOptions[menuOptionSelected].assets
  const typeOfRecord = Object.entries(authState.accessPermits.submenuOptions[menuOptionSelected].menuAndAPI)
  const selectetion = authState.viewPageControl.tableDefaultToRender

  // HANDLE LOCATION TO SHOW
  const changingLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setViewPageControl({ activeHeadquarters: e.target.value }))
  }

  // HANDLE DATA TO SHOW ON TABLE
  const changingDataToShow = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setViewPageControl({ tableDefaultToRender: e.target.value }))
  }

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
        message: idiom.warning
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
        <Sselect onChange={(e) => { changingLocation(e) }}>
          {locationSelect.map((data: string, i: number) => (
            <option key={i} value={data}>{data === 'allLocations' ? idiom.allLocations : data}</option>
          ))
          }
        </Sselect>

        <Sselect onChange={(e) => { changingDataToShow(e) }} defaultValue={selectetion}>
          {typeOfRecord.map((data: any[], i: number) => (
            <option key={i} value={data[0]}>{data[1]}</option>
          ))
          }
        </Sselect>
      </LeftMenu>

      <RightMenu>
        <Sbutton bgColor={'green'} onClick={createNewEntry}>
          <BsDatabaseFillAdd />
          <Sspan Right={'0'}>{idiom.DatabaseAdd}</Sspan>
        </Sbutton>

        <Sbutton bgColor={'blue'} Color={'black'} onClick={showHideColumns}>
          <RiTableFill />
          <Sspan Right={'0'}>{idiom.showHideColumns}</Sspan>
        </Sbutton>

        <Sbutton bgColor={'green'} Color={'black'} onClick={exportDataExcel}>
          <RiFileExcel2Fill />
          <Sspan Right={'0'}>{idiom.exportExcel}</Sspan>
        </Sbutton>

        <Sbutton bgColor={'orange'} Color={'black'} onClick={printQRcode}>
          <BsQrCode />
          <Sspan Right={'0'}>{idiom.printQRcode}</Sspan>
        </Sbutton>

        <Sbutton bgColor={'lightblue'} Color={'black'} onClick={cloneRegister}>
          <FaClone />
          <Sspan Right={'0'}>{idiom.cloneRecord}</Sspan>
        </Sbutton>

        <Sbutton bgColor={'red'} Color={'black'} onClick={printPDF}>
          <FaFilePdf />
          <Sspan Right={'0'}>{idiom.printPDF}</Sspan>
        </Sbutton>
      </RightMenu>
    </MainDiv>
  )
}
