const English = {
  tagText: [
    { title: 'Total assets', searchOption: false, value: 400 },
    { title: 'Active PM', searchOption: false, value: 100 },
    { title: 'Unscheduled PM', searchOption: false, value: 300 },
    { title: 'Active CM', searchOption: false, value: 10 },
    { title: 'open critical CM', searchOption: true, value: 5 }
  ],
  privateRightbar: [
    { title: 'assets', path: '/assets' },
    { title: 'spare parts / supplies', path: '/sparePartsSuplies' },
    { title: 'tools', path: '/tools' },
    { title: 'vehicles', path: '/vehicles' }
  ]
}

const Español = {
  tagText: [
    { title: 'Total activos', searchOption: false, value: 400 },
    { title: 'MP activos', searchOption: false, value: 100 },
    { title: 'MP sin programar', searchOption: false, value: 300 },
    { title: 'MC activos', searchOption: false, value: 10 },
    { title: 'MC críticos activos', searchOption: true, value: 5 }
  ],
  privateRightbar: [
    { title: 'activos', path: '/assets' },
    { title: 'repuestos / suministros', path: '/sparePartsSuplies' },
    { title: 'herramientas', path: '/tools' },
    { title: 'vehículos', path: '/vehicles' }
  ]
}

export const LANGUAGE = { English, Español }
