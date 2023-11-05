import { MainDiv, Simg, Sbutton } from './styles'
import US from '../../images/US.png'
import ES from '../../images/ES.png'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setGlobalStatus, setPublicWebPage } from '../../redux/slices/authState'

interface Props {
  setShowHideFlags: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Flags ({ setShowHideFlags }: Props) {
  const dispatch = useAppDispatch()
  const { authState } = useAppSelector(state => state)

  const flag = {
    English: US,
    Español: ES
  }

  const chooseLanguage = (e: string) => {
    authState.globalStatus.user !== ''
      ? dispatch(setGlobalStatus({ language: e }))
      : dispatch(setPublicWebPage({ language: e }))

    setShowHideFlags(false)
  }

  return (
    <MainDiv>
      {Object.entries(flag).map(data => (
        <Sbutton key={data[0]} onClick={() => { chooseLanguage(data[0]) }}>
          <Simg src={data[1]} alt={data[0]} />
          {data[0]}
        </Sbutton>
      ))}

    </MainDiv>
  )
}
