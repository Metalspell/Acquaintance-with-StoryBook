import React, { useState } from 'react'
import TabsHeader from '../TabsHeader'

import './Tabs.css'

export function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0)

  function handleTabClick(index) {
    setActiveIndex(index)
  }

  return (
    <div className="tabs-container">
      <div className="tabs-header-container">
        <TabsHeader
          activeIndex={activeIndex}
          tabs={tabs}
          onTabClick={handleTabClick}
        />
      </div>
      <div className="tabs-content-container">
        {tabs[activeIndex].renderContent()}
      </div>
    </div>
  )
}