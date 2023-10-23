import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  feedbackModal: { initialState: boolean, type: string, message: string, style: Record<string, unknown> }
  globalStatus: { logged: boolean, language: string, theme: string, token: string, user: string, windowWidth: number }
  leftSidebar: { initialState: boolean, menuOptions: string[], menuRightOptions: string[], menuOptionSelected: string }
  viewPageControl: { mainCategory: string, subcategory: string, idToEdit: '' }
}

const initialState: AuthState = {
  feedbackModal: { initialState: false, type: '', message: '', style: {} },
  globalStatus: { logged: false, language: 'English', theme: 'light', token: '', user: '', windowWidth: 0 },
  leftSidebar: { initialState: false, menuOptions: [], menuRightOptions: [], menuOptionSelected: '' },
  viewPageControl: { mainCategory: '', subcategory: '', idToEdit: '' }
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
    setLeftSidebar: (state, action) => {
      state.leftSidebar = { ...state.leftSidebar, ...action.payload }
    },
    setViewPageControl: (state, action) => {
      // console.log(state)
      // console.log(action)
      state.viewPageControl = { ...state.viewPageControl, ...action.payload }
    }
  }
})

export const { setFeedbackModal, setGlobalStatus, setLeftSidebar, setViewPageControl } = authSlice.actions

export default authSlice.reducer
