import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  language: 'English' | 'Español'
  logged: boolean
  sidebar: { initialState: boolean, menuOptions: string[] }
  theme: 'light' | 'dark' | 'colorful'
  token: string
  user: string
  modal: { initialState: boolean, type: string, message: string, style: Record<string, unknown> }
}

const initialState: AuthState = {
  language: 'English',
  logged: false,
  sidebar: { initialState: false, menuOptions: ['dashboard', 'allAssets', 'assets'] },
  theme: 'light',
  token: '',
  user: '',
  modal: { initialState: false, type: '', message: '', style: {} }
}

const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setLanguage: (state) => {
      state.language = state.language === 'English' ? 'Español' : 'English'
    },
    setLogin: (state, action) => {
      state.user = action.payload.user.uid
      state.token = action.payload.user.accessToken
      state.logged = true
    },
    setLogout: (state) => {
      state.user = ''
      state.token = ''
      state.logged = false
      state.sidebar = { initialState: false, menuOptions: [] }
    },
    setsidebar: (state, action) => {
      console.log(state)
      console.log(action)
      state.sidebar = { ...state.sidebar, ...action.payload }
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      // console.log(state.theme);
    },
    setTModal: (state, action) => {
      state.modal = { ...state.modal, ...action.payload }
      // console.log(state.theme);
    }
  }
})

export const { setLanguage, setLogin, setLogout, setsidebar, setTheme, setToken, setTModal } = authSlice.actions

export default authSlice.reducer
