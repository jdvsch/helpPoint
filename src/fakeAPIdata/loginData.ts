// DATOS DE CADA USUARIO LOGEADO
export const userSettup = {
  GlobalStatus: {
    companyName: 'Assets Minders',
    language: 'English',
    theme: 'light',
    token: '',
    user: 'userCredential.user.uid',
    windowWidth: window.innerWidth,
    tableRowSize: 13
  },
  accessPermits: {
    menuOptions: ['dashboard', 'assets', 'workManament', 'warehouses', 'inhousePersonnel', 'suppliers', 'setting', 'help'],
    submenuOptions: {
      dashboard: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        menuAndAPI: { dashboard: 'dashboard' },
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      assets: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        menuAndAPI: { buildings: 'buildings', equipment: 'equipment / machinery', tools: 'tools', spare: 'spare and parts', vehicles: 'vehicles' },
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      workmanament: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        workmanament: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      warehouses: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        warehouses: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      inhousePersonnel: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        inhousePersonnel: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      suppliers: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        suppliers: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      setting: {
        locations: ['allLocations', 'sede 1', 'sede 2'],
        setting: ['my setting', 'setting others user', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      help: {
      }
    }
  },
  viewPageControl: {
    activeHeadquarters: 'allLocations',
    menuOptionDefault: 'dashboard'
  }

}
