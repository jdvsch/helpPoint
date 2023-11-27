import { MainDiv } from './styles'
import { useAppSelector } from '../../../hooks/redux'

import Attachments from '../attachments/Attachments'
import Assets from '../assetsForm/Assets'
import CustomInfo from '../customInfo/CustomInfo'
import GeneralInfo from '../generalInfo/Main'
import Historical from '../historical/Historical'
import SparePartsAndSupplies from '../sparePartsAndSupplies/SparePartsAndSupplies'
import TableView from '../tableView/Main'
import ThirdParties from '../thirdParties/ThirdParties'

import GeneralInfo2 from '../buildings/GeneralInfo'

export default function Main () {
  const { authState } = useAppSelector(state => state)
  const viewController = authState.viewPageControl.viewControl
  const selectPageToRender = {
    attachments: Attachments,
    customInfo: CustomInfo,
    generalInfo: Assets,
    historical: Historical,
    sparePartsAndSupplies: SparePartsAndSupplies,
    tableView: TableView,
    thirdParties: ThirdParties
  }
  const PageToRender = selectPageToRender[viewController as keyof typeof selectPageToRender]

  return (<MainDiv><PageToRender /></MainDiv>)
}
