import { MainDiv } from './stylesApp'
import { Measures } from './styles/variables'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes'
import { GloblaStyle } from './styles/GlobalStyle'

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './hooks/redux'

import Assets from './pages/assets/generalInfo/Assets'
import Dashboard from './pages/dashboard/Dashboard'
import AllAssets from './pages/allAssets/AllAssets'
import Home from './pages/home/Home'
import LogIn from './pages/login/Login'
import Modal from './components/modal/Modal'
import PrivateLeftbar from './components/privateLeftbar/PrivateLeftbar'
import PrivateTopbar from './components/privateTopbar/PrivateTopbar'
import ProtectedRoute from './config/routes/ProtectedRoute'
import PublicTopbar from './components/publicTopbar/PublicTopbar'

export default function App () {
  const { authState } = useAppSelector(state => state)
  const [theme] = React.useState(authState.theme === 'light' ? lightTheme : darkTheme)

  React.useEffect(() => {
    const handleResize = () => {
      // do magic for resize
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // if (screen.width < 900) { console.log('Pequeña') } else { console.log('grande') }

  const PrivateMenu = {
    dashboard: { path: '/dashboard', element: <Dashboard /> },
    allAssets: { path: '/allAssets', element: <AllAssets /> },
    assets: { path: '/assets', element: <Assets /> }
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GloblaStyle />
      <MainDiv >
      {authState.logged
        ? <PrivateTopbar Height={Measures.privateTopbar}/>
        : <PublicTopbar Height={Measures.publicTopbar}/>
      }

      { authState.modal.initialState && <Modal/> }

      { authState.sidebar.initialState && <PrivateLeftbar/> }

      <Routes>
        <Route path="/"
          element={authState.logged
            ? <Navigate to={'/dashboard'} replace />
            : <Home />}
        />

          <Route path="/login"
            element={authState.logged
              ? <Navigate to={'/dashboard'} replace />
              : <LogIn />}
          />

          <Route path="*"
            element={authState.logged
              ? <Navigate to={'/dashboard'} replace />
              : <Navigate to={'/'} replace />}
          />

          <Route element={<ProtectedRoute isActivate={authState.logged} />}>
          {authState.sidebar.menuOptions.map((data, index) => (<Route key={index} path={PrivateMenu[data].path} element={PrivateMenu[data].element} />))}
          </Route>
        </Routes>
      </MainDiv>
      </ThemeProvider>
    </BrowserRouter>
  )
}
