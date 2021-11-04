import React from 'react'

import './TabHeaderItem.css'

export function TabHeaderItem({ text, onClick, active }) {

  function handleClick() {
    onClick()
  }

  return (
    <div className="container" onClick={handleClick}>
      <div className={`content-container ${active ? 'content-container-active' : ''}`}>
        <span className="title">
          {text}
        </span>
      </div>
    </div>
  )
}