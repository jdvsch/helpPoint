import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  accessPermits: { locations: string[], menuOptions: string[], submenuOptions: Record<string, unknown> }
  feedbackModal: { initialState: boolean, type: string, message: string, style: Record<string, unknown> }
  globalStatus: { companyName: string, language: string, tableRowSize: number, theme: string, token: string, user: string, windowWidth: number }
  loader: { loading: boolean, error: string }
  publicWebPage: { language: string }
  viewPageControl: { activeLocation: string, idToEdit: Record<string, unknown>, isDirthy: boolean, menuOptionDefault: string, showHideSaveModal: boolean, menuOptionsSelected: string, tableDefaultToRender: string, viewControl: string, viewLeftMenuModal: boolean }
}

const initialState: AuthState = {
  accessPermits: { locations: [], menuOptions: [], submenuOptions: {} },
  feedbackModal: { initialState: false, type: '', message: '', style: {} },
  globalStatus: { companyName: '', language: 'English', tableRowSize: 10, theme: 'light', token: '', user: '', windowWidth: 0 },
  loader: { loading: false, error: '' },
  publicWebPage: { language: 'English' },
  viewPageControl: { activeLocation: '', idToEdit: {}, isDirthy: false, menuOptionDefault: '', showHideSaveModal: false, menuOptionsSelected: '', tableDefaultToRender: '', viewControl: '', viewLeftMenuModal: false }
}

const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setFeedbackModal: (state, action) => {
      state.feedbackModal = { ...state.feedbackModal, ...action.payload }
    },
    setGlobalStatus: (state, action) => {
      state.globalStatus = { ...state.globalStatus, ...action.payload }
    },
    setAccessPermits: (state, action) => {
      state.accessPermits = { ...state.accessPermits, ...action.payload }
    },
    setLoader: (state, action) => {
      state.loader = { ...state.loader, ...action.payload }
    },
    setPublicWebPage: (state, action) => {
      state.publicWebPage = { ...state.publicWebPage, ...action.payload }
    },
    setViewPageControl: (state, action) => {
      // console.log(state)
      // console.log(action)
      state.viewPageControl = { ...state.viewPageControl, ...action.payload }
    }
  }
})

export const { setAccessPermits, setFeedbackModal, setGlobalStatus, setLoader, setPublicWebPage, setViewPageControl } = authSlice.actions

export default authSlice.reducer
