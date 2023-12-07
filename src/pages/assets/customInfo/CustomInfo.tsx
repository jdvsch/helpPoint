import React from 'react'
import { language } from './language'
import { TopMenu, Button, Sspan } from './styles'
import { MdDashboardCustomize } from 'react-icons/md'
import { FaListCheck } from 'react-icons/fa6'

import { useAppSelector } from '../../../hooks/redux'

export default function CustomInfo ({ register }: any) {
  const { authState } = useAppSelector(state => state)
  const idiom = language[authState.globalStatus.language as keyof typeof language]
  return (
    <div>
      <TopMenu>
        <select name="" id="">
          <option>{idiom.select}</option>
          <option value="1">111</option>
        </select>

        <Button>
          <FaListCheck />
          <Sspan Right={'0'}>{idiom.createList}</Sspan>
        </Button>

        <Button>
          <MdDashboardCustomize />
          <Sspan Right={'0'}>{idiom.createCustom}</Sspan>
        </Button>
      </TopMenu>

    </div>
  )
}
