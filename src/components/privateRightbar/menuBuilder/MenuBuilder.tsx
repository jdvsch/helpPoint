import React from 'react'
import { SidebarLink, SidebarLabel, DropdownLink } from './styles'

interface SidebarItem {
  title: string
  path: string
  icon?: any
  iconOpened?: any
  iconClosed?: any
  subnav?: SidebarItem[]
}

export default function MenuBuilder ({ item }: { item: SidebarItem }) {
  const [subnav, setSubnav] = React.useState(false)
  const showSubnav = () => { setSubnav(!subnav) }

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {((item?.subnav) != null) && subnav ? item?.iconOpened : item?.iconClosed}
        </div>
      </SidebarLink>

      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <DropdownLink to={subnavItem.path} key={index}>
              {subnavItem.icon}
              <SidebarLabel>{subnavItem.title}</SidebarLabel>
            </DropdownLink>
          )
        })}

    </>
  )
}
