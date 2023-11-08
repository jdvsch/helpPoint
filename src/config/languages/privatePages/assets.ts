const English = {
    generalAssetsInputs:
      {
        isActive: 'status',
        code: 'write a unique code',
        code_error: 'you must enter a unique code',
        name: 'name',
        maker: 'maker',
        model: 'model',
        serial: 'serial',
        priority: 'repair priority',
        purchase_date: 'purchase date',
        warranty_due_date: 'warranty due date',
        note: 'note',
        statusSelect: [{
          id: 0,
          value: 'active'
        },
        {
          id: 1,
          value: 'inactive'
        }],
        prioritySelect: [{
          id: 0,
          value: ''
        },
        {
          id: 1,
          value: 'High'
        },
        {
          id: 2,
          value: 'Medium'
        },
        {
          id: 3,
          value: 'Low'
        }]
      },
    defaultGeneralAssetsInputs:
      {
        isActive: 0,
        code: '',
        name: '',
        maker: '',
        model: '',
        serial: '',
        purchase_date: '',
        warranty_due_date: '',
        priority: 0,
        note: ''
      }
  }
  
  const Español = {
    generalAssetsInputs:
      {
        isActive: 'estatus',
        code: 'escriba un código único',
        code_error: 'usted debe ingresar un código único',
        name: 'nombre',
        maker: 'marca',
        model: 'modelo',
        serial: 'serial',
        priority: 'prioridad de reparación',
        purchase_date: 'fecha de compra',
        warranty_due_date: 'fecha de vencimiento de garantia',
        note: 'nota',
        statusSelect: [{
          id: 0,
          value: 'activo'
        },
        {
          id: 1,
          value: 'inactivo'
        }],
        prioritySelect: [{
          id: 0,
          value: ''
        },
        {
          id: 1,
          value: 'Alta'
        },
        {
          id: 2,
          value: 'Media'
        },
        {
          id: 3,
          value: 'Baja'
        }]
      },
    defaultGeneralAssetsInputs:
      {
        isActive: 0,
        code: '',
        name: '',
        maker: '',
        model: '',
        serial: '',
        purchase_date: '',
        warranty_due_date: '',
        priority: 0,
        note: ''
      }
  }
  
  export const LANGUAGE = { English, Español }