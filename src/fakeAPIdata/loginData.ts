// DATOS DE CADA USUARIO LOGEADO
export const userSettup = {
  GlobalStatus: {
    companyName: 'Assets Minders',
    language: 'English',
    theme: 'light',
    token: '',
    user: 'userCredential.user.uid',
    windowWidth: window.innerWidth,
    tableRowSize: 5
  },
  accessPermits: {
    menuOptions: ['dashboard', 'assets', 'workManament', 'warehouses', 'inhousePersonnel', 'suppliers', 'setting', 'help'],
    menuOptionSelected: 'dashboard',
    submenuOptions: {
      assets: {
        locations: ['todas', 'sede 1', 'sede 2'],
        assets: ['Buildings', 'equipment / machinery', 'tools', 'spare and parts', 'vehicles'],
        tableControl: {
          Buildings: {
            name: 'Buildings',
            tableColumns: '',
            tableData: ''
          },
          equipment: {
            name: 'equipment / machinery',
            tableColumns: '',
            tableData: ''
          },
          tools: {
            name: 'tools',
            tableColumns: '',
            tableData: ''
          },
          spare: {
            name: 'spare and parts',
            tableColumns: '',
            tableData: ''
          },
          vehicles: {
            name: 'vehicles',
            tableColumns: '',
            tableData: ''
          }
        },
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      inHousePersonnel: {
        locations: ['todas', 'sede 1', 'sede 2'],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      setting: {
        locations: ['todas', 'sede 1', 'sede 2'],
        assets: ['myConfiguration', 'configurationoOtherUsers'],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      suppliers: {
        locations: ['todas', 'sede 1', 'sede 2'],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      warehouses: {
        locations: ['todas', 'sede 1', 'sede 2'],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      },
      workmanament: {
        locations: ['todas', 'sede 1', 'sede 2'],
        writePermissions: 'w' // Lectura (r), Escritura (w), Ejecución (x), Sin permisos (-)
      }
    }
  }
}
