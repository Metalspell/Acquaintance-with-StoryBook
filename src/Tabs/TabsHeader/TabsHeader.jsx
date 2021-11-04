import React from 'react'

import './TabsHeader.css'

import { TabHeaderItem } from '../TabHeaderItem'

export function TabsHeader({tabs, activeIndex, onTabClick }) {
  
  function handleClick(index) {
    onTabClick(index)
  }

  return (
    <div className="tabs-header-container">
      {tabs.map((tab, index) => (
        <div className="header-item-container" key={index}>
          <TabHeaderItem text={tab.text} onClick={() => handleClick(index)}/>
        </div>
      ))} 
    </div>
  )
}
