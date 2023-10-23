// datos de configuracion de la aplicacion
export const GlobalStatus = {
  logged: true,
  language: 'English',
  theme: 'light',
  token: '',
  user: 'userCredential.user.uid',
  windowWidth: window.innerWidth
}

export const LeftSidebar = {
  menuOptions: ['dashboard', 'allAssets'],
  menuRightOptions: { allAssets: ['location', 'equipment', 'vehicles', 'tools', 'spare parts'] },
  menuOptionSelected: 'dashboard'
}
