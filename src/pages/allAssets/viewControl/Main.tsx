import { MainDiv } from './styles'
import { useAppSelector } from '../../../hooks/redux'

import Attachments from '../attachments/Main'
import CustomInfo from '../customInfo/Main'
import GeneralInfo from '../generalInfo/Main'
import Historical from '../historical/Main'
import SparePartsAndSupplies from '../sparePartsAndSupplies/Main'
import TableView from '../tableView/Main'
import ThirdParties from '../thirdParties/Main'

export default function Main () {
  const { authState } = useAppSelector(state => state)
  const viewController = authState.viewPageControl.subcategory
  const selectPageToRender = {
    attachments: Attachments,
    customInfo: CustomInfo,
    generalInfo: GeneralInfo,
    historical: Historical,
    sparePartsAndSupplies: SparePartsAndSupplies,
    tableView: TableView,
    thirdParties: ThirdParties
  }
  const PageToRender = selectPageToRender[viewController as keyof typeof selectPageToRender]

  return (<MainDiv><PageToRender /></MainDiv>)
}
