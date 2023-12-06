import React from 'react'

import { MainDiv } from './stylesApp'
import { Measures } from './styles/variables'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes'
import { GloblaStyle } from './styles/GlobalStyle'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './hooks/redux'
import { setGlobalStatus } from './redux/slices/authState'

import Loader from './components/modal/loader/Loader'
import PrivateTopbar from './components/navbar/privateTopbar/PrivateTopbar'
import ProtectedRoute from './config/routes/ProtectedRoute'
import PublicTopbar from './components/navbar/publicTopbar/PublicTopbar'

import AssetsViewControl from './pages/assets/assetsViewControl/AssetsViewControl'
import Dashboard from './pages/dashboard/Dashboard'
import Help from './pages/help/Help'
import Home from './pages/home/Home'
import LogIn from './pages/login/Login'
import Personnel from './pages/inHousePersonnel/Personnel'
import Setting from './pages/setting/Setting'
import Suppliers from './pages/suppliers/Suppliers'
import Warehouses from './pages/warehouses/Warehouses'
import WorkManament from './pages/workManament/WorkManament'

export default function App () {
  const { authState } = useAppSelector(state => state)
  const [theme] = React.useState(authState.globalStatus.theme === 'light' ? lightTheme : darkTheme)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const handleResize = () => {
      // do magic for resize
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      dispatch(setGlobalStatus({ windowWidth: window.innerWidth }))
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const ProtectedRouteOptions = {
    assets: <Route key={'assets'} path='/assets' element={<AssetsViewControl />} />,
    dashboard: <Route key={'dashboard'} path='/dashboard' element={<Dashboard />} />,
    help: <Route key={'help'} path='/help' element={<Help />} />,
    inhousePersonnel: <Route key={'personnel'} path='/personnel' element={<Personnel />} />,
    setting: <Route key={'setting'} path='/setting' element={<Setting />} />,
    suppliers: <Route key={'suppliers'} path='/suppliers' element={<Suppliers />} />,
    warehouses: <Route key={'warehouses'} path='/warehouses' element={<Warehouses />} />,
    workManament: <Route key={'workManament'} path='/workManament' element={<WorkManament />} />
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GloblaStyle />
      <MainDiv>
      {authState.globalStatus.user !== ''
        ? <PrivateTopbar Height={Measures.privateTopbar}/>
        : <PublicTopbar Height={Measures.publicTopbar}/>
      }

      { authState.loader.loading && <Loader/> }

      <Routes>
        <Route path="/"
          element={authState.globalStatus.user !== ''
            ? <Navigate to={'/dashboard'} replace />
            : <Home />}
        />

          <Route path="/login"
            element={authState.globalStatus.user !== ''
              ? <Navigate to={'/dashboard'} replace />
              : <LogIn />}
          />

          <Route path="*"
            element={authState.globalStatus.user !== ''
              ? <Navigate to={'/dashboard'} replace />
              : <Navigate to={'/'} replace />}
          />

          <Route element={<ProtectedRoute isActivate={authState.globalStatus.user !== ''} />}>
          {authState.accessPermits.menuOptions.map(data => ProtectedRouteOptions[data as keyof typeof ProtectedRouteOptions])}
          </Route>

        </Routes>
      </MainDiv>
      </ThemeProvider>
    </BrowserRouter>
  )
}
