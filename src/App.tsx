import { MainDiv } from './stylesApp'
import { Measures } from './styles/variables'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/themes'
import { GloblaStyle } from './styles/GlobalStyle'

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './hooks/redux'
import { setGlobalStatus } from './redux/slices/authState'

import Dashboard from './pages/dashboard/Dashboard'
import AllAssets from './pages/allAssets/viewControl/Main'
import Home from './pages/home/Home'
import LogIn from './pages/login/Login'
import FeedbackModal from './components/modal/alertModal/FeedbackModal'
import LeftMenuModal from './components/modal/leftMenuModal/LeftMenuModal'
import PrivateTopbar from './components/navbar/privateTopbar/PrivateTopbar'
import ProtectedRoute from './config/routes/ProtectedRoute'
import PublicTopbar from './components/navbar/publicTopbar/PublicTopbar'

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

  const PrivateMenu = {
    dashboard: { path: '/dashboard', element: <Dashboard /> },
    allAssets: { path: '/assets', element: <AllAssets /> }
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <GloblaStyle />
      <MainDiv >
      {authState.globalStatus.logged
        ? <PrivateTopbar Height={Measures.privateTopbar}/>
        : <PublicTopbar Height={Measures.publicTopbar}/>
      }

      { authState.feedbackModal.initialState && <FeedbackModal/> }

      { authState.leftSidebar.initialState && <LeftMenuModal/> }

      <Routes>
        <Route path="/"
          element={authState.globalStatus.logged
            ? <Navigate to={'/dashboard'} replace />
            : <Home />}
        />

          <Route path="/login"
            element={authState.globalStatus.logged
              ? <Navigate to={'/dashboard'} replace />
              : <LogIn />}
          />

          <Route path="*"
            element={authState.globalStatus.logged
              ? <Navigate to={'/dashboard'} replace />
              : <Navigate to={'/'} replace />}
          />

          <Route element={<ProtectedRoute isActivate={authState.globalStatus.logged} />}>
          {authState.leftSidebar.menuOptions.map((data, index) => (<Route key={index} path={PrivateMenu[data].path} element={PrivateMenu[data].element} />))}
          </Route>
        </Routes>
      </MainDiv>
      </ThemeProvider>
    </BrowserRouter>
  )
}
