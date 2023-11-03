export interface locationsInterface {
  id: string
  address: string
  city: string
  state: string
  country: string
  zipcoode: string
  priority: string
  type: string
  note: string
}

export const locatios: locationsInterface[] = [
  { id: 'envigado', address: 'avenida las vegas', city: 'medellin', state: 'antioquia', country: 'colombia', zipcoode: '005577', priority: 'hight', type: 'almacen', note: 'es el almacen principal junto con la sede administrativa' }
]

export interface equipmentInterface {
  isPartOf: string
  name: string
  id: string | number
  make: string
  model: string
  serialNumber: string
  extra1: string
  extra2: string
  priority: string
  type: string
  group1: string
  group2: string
  supplier: string
  purchaseDate: Date | string
  hourOfUse: string
  note: string
}

export const equipment: equipmentInterface[] = [
  { isPartOf: '', name: 'extrusora 01', id: 'EXT-01', make: 'Schneider electronics', model: 'jdvs01', serialNumber: 'sklajiufiojanknfsnfsdio', extra1: '', extra2: '', priority: 'hight', type: 'extruder', group1: 'producer machines', group2: '', supplier: 'the house extruder', purchaseDate: '2023-22-12', hourOfUse: '8', note: 'extrusora para pequeñas cantidades' },
  { isPartOf: '', name: 'extrusora 02', id: 'EXT-02', make: 'JDVS Schneider electronics', model: 'jdvs02', serialNumber: 'sklajiufiojanknfsnfsdio2', extra1: '', extra2: '', priority: 'hight', type: 'extruder', group1: 'producer machines', group2: '', supplier: 'the house extruder', purchaseDate: '2023-22-12', hourOfUse: '8', note: 'extrusora para pequeñas cantidades' }
]

export interface vehicleInterface {
  id: string
  make: string
  model: string
  serialNumber: string
  extra1: string
  extra2: string
  priority: string
  type: string
  group1: string
  group2: string
  supplier: string
  purchaseDate: Date | string
  note: string
}

export const vehicle: vehicleInterface[] = [
  { id: 'iot425', make: 'nissan', model: 'corsa active', serialNumber: 'sajkhfjhwejasnfaj', extra1: '1600 cc', extra2: '5 pasajeros', priority: 'hight', type: 'turismo', group1: 'administrativo', group2: '', supplier: 'vehículos del sur', purchaseDate: '2017-01-01', note: 'fue un presente para la esposa' }
]

export interface toolsInterface {
  id: number
  tool_name: string | null
  boolean: string
  year: string
  money: string
  number: number
  time: string
}

export const tools: toolsInterface[] = [
  { id: 1, tool_name: 'Drill extralargo para pruebas', boolean: 'true', year: '3/30/2023', money: '$6.08', number: 84, time: '7:27 AM' },
  { id: 2, tool_name: 'Dragline', boolean: 'true', year: '5/14/2023', money: '$5.92', number: 81, time: '8:40 PM' },
  { id: 3, tool_name: 'Crawler', boolean: 'true', year: '8/25/2023', money: '$4.43', number: 32, time: '3:01 PM' },
  { id: 4, tool_name: 'Scraper', boolean: 'true', year: '3/29/2023', money: '$2.11', number: 26, time: '5:05 PM' },
  { id: 5, tool_name: 'Trencher', boolean: 'false', year: '9/18/2022', money: '$6.74', number: 27, time: '12:09 PM' },
  { id: 6, tool_name: 'Dragline', boolean: 'true', year: '8/20/2023', money: '$8.16', number: 62, time: '4:26 AM' },
  { id: 7, tool_name: 'Trencher', boolean: 'true', year: '8/20/2023', money: '$3.32', number: 7, time: '4:07 PM' },
  { id: 8, tool_name: 'Bulldozer', boolean: 'false', year: '9/9/2023', money: '$5.62', number: 16, time: '10:54 PM' },
  { id: 9, tool_name: 'Scraper', boolean: 'false', year: '5/9/2023', money: '$3.08', number: 50, time: '2:43 PM' },
  { id: 10, tool_name: 'Skid-Steer', boolean: 'true', year: '9/20/2022', money: '$3.95', number: 29, time: '10:13 PM' },
  { id: 11, tool_name: 'Grader', boolean: 'false', year: '1/23/2023', money: '$3.79', number: 16, time: '3:07 PM' }
]

export interface sparePartsInterface {
  id: string
  name: string
  unit: string
  partNumber: string
  make: string
  model: string
  lot: string
  supplier: string
  minimumAmount: number
  note: string
}

export const spareParts: sparePartsInterface[] = [
  { id: 'oil45', name: 'iso 46', unit: 'litros', partNumber: 'no aplica', make: 'ecopetrol', model: '', lot: 'dkslajkjf', supplier: 'aceites de antioquia', minimumAmount: 20, note: 'aceite utilizado para las bombas de vacio' }
]
