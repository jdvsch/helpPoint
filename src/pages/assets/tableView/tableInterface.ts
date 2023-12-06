import { type Model } from '../../../components/table/tabletSelectModel/TableModel'

export interface BuildingsInterface extends Model {
  address: string
  city: string
  state: string
  country: string
  zipcoode: string
  priority: string
  type: string
  note: string
}

export interface equipmentInterface extends Model {
  isPartOf: string
  location: string
  name: string
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

export interface vehiclesInterface extends Model {
  make: string
  model: string
  location: string
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

export interface toolsInterface extends Model {
  tool_name: string | null
  location: string
  boolean: string
  year: string
  money: string
  number: number
  time: string
}

export interface sparePartsInterface extends Model {
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
  location: string
}
