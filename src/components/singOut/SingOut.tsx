import { signOut } from 'firebase/auth'
import { authFirebase } from '../../firebase/firebase'
import { useAppDispatch } from '../../hooks/redux'
import { setGlobalStatus, setAccessPermits, setViewPageControl } from '../../redux/slices/authState'
import { AiOutlineLogout } from 'react-icons/ai'
import { Button } from './styles'

export default function SingOut () {
  const dispatch = useAppDispatch()

  const handleSingOut = () => {
    signOut(authFirebase).then(() => {
      dispatch(setGlobalStatus({ companyName: '', language: 'English', tableRowSize: 10, theme: 'light', token: '', user: '', windowWidth: 0 }))
      dispatch(setAccessPermits({ menuOptions: [], submenuOptions: {} }))
      dispatch(setViewPageControl({ activeHeadquarters: '', idToEdit: {}, isDirthy: false, menuOptionDefault: '', showHideSaveModal: false, menuOptionsSelected: '', tableDefaultToRender: '', viewControl: '', viewLeftMenuModal: false }))
    })
      .catch(err => {
        console.log('error')
        console.log(err.code)
      })
  }

  return (
    <Button onClick={handleSingOut}><AiOutlineLogout/></Button>
  )
}
