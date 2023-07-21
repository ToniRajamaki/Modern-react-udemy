import React, { cloneElement } from 'react'
import { useState } from 'react'

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSelection, setCurrentSelection] = useState('Select...')

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    console.log('option', option)
    setCurrentSelection(option.value)
    console.log('currentSelection', currentSelection)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    )
  })

  return (
    <div>
      <div onClick={handleClick}>{currentSelection}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}
export default Dropdown
