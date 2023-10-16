import { MainDiv, LeftMenu, Sselect, CenterMenu, RightMenu, Button } from './styles'
import { BsQrCode, BsFiletypePdf } from 'react-icons/bs'
import { RiAddCircleFill, RiFileExcel2Fill, RiTableFill } from 'react-icons/ri'
import { FaRegClone } from 'react-icons/fa'

export default function ExportFunction () {
  return (
    <MainDiv>
      <LeftMenu>
      <Sselect>
      cambiar de sede
      </Sselect>

      <CenterMenu>
        <Button>
          <RiAddCircleFill />
        </Button>
      </CenterMenu>
      </LeftMenu>

      <RightMenu>
        <Button>
          <RiTableFill />
        </Button>

        <Button>
          <RiFileExcel2Fill />
        </Button>

        <Button>
          <BsQrCode />
        </Button>

        <Button>
        <FaRegClone />
        </Button>

        <Button>
        <BsFiletypePdf />
        </Button>
      </RightMenu>
    </MainDiv>
  )
}
