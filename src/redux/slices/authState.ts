import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  modal: { initialState: boolean, type: string, message: string, style: Record<string, unknown> }
  pageStatus: { logged: boolean, language: string, theme: string, token: string, user: string, windowWidth: number }
  sidebar: { initialState: boolean, menuOptions: string[] }
}

const initialState: AuthState = {
  modal: { initialState: false, type: '', message: '', style: {} },
  pageStatus: { logged: false, language: 'English', theme: 'light', token: '', user: '', windowWidth: 0 },
  sidebar: { initialState: false, menuOptions: [] }
}

const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = { ...state.modal, ...action.payload }
    },
    setPageStatus: (state, action) => {
      state.pageStatus = { ...state.pageStatus, ...action.payload }
    },
    setSidebar: (state, action) => {
      // console.log(state)
      // console.log(action)
      state.sidebar = { ...state.sidebar, ...action.payload }
    }
  }
})

export const { setModal, setPageStatus, setSidebar } = authSlice.actions

export default authSlice.reducer
