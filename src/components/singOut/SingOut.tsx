import { signOut } from 'firebase/auth'
import { authFirebase } from '../../firebase/firebase'
import { useAppDispatch } from '../../hooks/redux'
import { setPageStatus, setSidebar } from '../../redux/slices/authState'
import { AiOutlineLogout } from 'react-icons/ai'
import { Button } from './styles'

export default function SingOut () {
  const dispatch = useAppDispatch()

  const handleSingOut = () => {
    signOut(authFirebase).then(() => {
      dispatch(setPageStatus({ logged: false, language: 'English', theme: '', token: '', user: '' }))
      dispatch(setSidebar({ initialState: false, menuOptions: [] }))
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
