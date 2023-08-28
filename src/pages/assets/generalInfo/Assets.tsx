import React from 'react'
import { MainDiv, LeftSide, SubmitButton, SubContainer, RightSide, Rows, HalfRows } from './styles'

import { LANGUAGE } from '../../../config/constants/language/privatePages/assets'

import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import DropImage from '../../../components/dropImage/DropImage'
import QrCode from '../../../components/qrCode/QrCode'
import Date from '../../../components/inputs/date/Date'
import TextValidator from '../../../components/inputs/textValidator/TextValidator'
import Select from '../../../components/inputs/select/Select'
import Text from '../../../components/inputs/text/Text'
import TextArea from '../../../components/inputs/textarea/TextArea'

interface FormValues {
  isActive: number
  code?: string
  name: string
  maker: string
  model: string
  serial: string
  priority: number
  purchase_date?: Date
  warranty_due_date?: Date
  note: string
}

export default function Assets () {
  const dispatch = useAppDispatch()

  const { authState } = useAppSelector(state => state)
  const tongue = authState.language
  const infoInputs = LANGUAGE[tongue]

  const schema = yup.object({
    isActive: yup.number(),
    code: yup.string().required(infoInputs.generalAssetsInputs.code_error),
    name: yup.string(),
    maker: yup.string(),
    model: yup.string(),
    serial: yup.string(),
    purchase_date: yup.string(),
    warranty_due_date: yup.string(),
    priority: yup.number(),
    note: yup.string()
  }).required()

  React.useEffect(() => {

  }, [])

  const [isCodeUnique, setIsCodeUnique] = React.useState(false)

  const { register, handleSubmit, formState: { errors, isDirty } } = useForm({
    defaultValues: infoInputs.defaultGeneralAssetsInputs,
    mode: 'all',
    resolver: yupResolver(schema)
  })

  const onSubmit = (formInfo: FormValues): void => {
    console.log(formInfo)
  }

  return (
    <MainDiv onSubmit={ handleSubmit(onSubmit) }>
      <LeftSide>
        {(isCodeUnique && isDirty) &&
        <SubmitButton>submit</SubmitButton>
        }
        <SubContainer><DropImage /></SubContainer>
        <SubContainer><QrCode /></SubContainer>
      </LeftSide>
      <RightSide>
        <HalfRows>
          <Select {...{
            Register: register('isActive'),
            Placeholder: infoInputs.generalAssetsInputs.isActive,
            Error: errors.isActive?.message,
            selectOptions: infoInputs.generalAssetsInputs.statusSelect
          }}/>
        </HalfRows>
        <Rows>
          <TextValidator {...{
            Register: register('code'),
            Placeholder: infoInputs.generalAssetsInputs.code,
            setIsCodeUnique
          }} />

          <Text {...{
            Register: register('name'),
            Placeholder: infoInputs.generalAssetsInputs.name,
            Error: errors.name?.message
          }} />
        </Rows>
        <Rows>
          <Text {...{
            Register: register('maker'),
            Placeholder: infoInputs.generalAssetsInputs.maker,
            Error: errors.maker?.message
          }} />

          <Text {...{
            Register: register('model'),
            Placeholder: infoInputs.generalAssetsInputs.model,
            Error: errors.model?.message
          }} />
        </Rows>
        <Rows>
          <Text {...{
            Register: register('serial'),
            Placeholder: infoInputs.generalAssetsInputs.serial,
            Error: errors.serial?.message
          }} />

          <Select {...{
            Register: register('priority'),
            Placeholder: infoInputs.generalAssetsInputs.priority,
            Error: errors.priority?.message,
            selectOptions: infoInputs.generalAssetsInputs.prioritySelect
          }}/>
        </Rows>
        <Rows>
          <Date {...{
            Register: register('purchase_date', { valueAsDate: true }),
            Placeholder: infoInputs.generalAssetsInputs.purchase_date,
            Error: errors.purchase_date?.message
          }} />

          <Date {...{
            Register: register('warranty_due_date', { valueAsDate: true }),
            Placeholder: infoInputs.generalAssetsInputs.warranty_due_date,
            Error: errors.warranty_due_date?.message
          }} />
        </Rows>
        <Rows>
          <TextArea {...{
            Register: register('note'),
            Placeholder: infoInputs.generalAssetsInputs.note,
            Error: errors.note?.message
          }} />
        </Rows>
      </RightSide>
    </MainDiv>
  )
}
