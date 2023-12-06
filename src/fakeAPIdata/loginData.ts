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
    locations: ['allLocations', 'sede 1', 'sede 2'],
    menuOptions: ['dashboard', 'assets', 'workManament', 'warehouses', 'inhousePersonnel', 'suppliers', 'setting', 'help'],
    submenuOptions: {
      dashboard: {
        mainSelectTable: { dashboard: 'dashboard' },
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      assets: {
        mainSelectTable: { buildings: 'buildings', equipment: 'equipment / machinery', tools: 'tools', spareParts: 'spare parts and supplies', vehicles: 'vehicles' },
        viewControl: 'tableView',
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      workmanament: {
        mainSelectTable: { },
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      warehouses: {
        warehouses: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      inhousePersonnel: {
        inhousePersonnel: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      suppliers: {
        suppliers: ['', '', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      setting: {
        setting: ['my setting', 'setting others user', '', '', ''],
        nameTableAPI: ['', '', '', '', ''],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      help: {
      }
    }
  },
  viewPageControl: {
    menuOptionDefault: 'dashboard',
    activeLocation: 'allLocations'
  }

}
