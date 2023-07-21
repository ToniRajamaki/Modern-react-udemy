import Dropdown from './components/Dropdown'
import { useState } from 'react'

function App() {
  const [currentSelection, setCurrentSelection] = useState(null)
  const handleChange = (selection) => {
    setCurrentSelection(selection)
  }

  const options = [
    { label: 'red', value: 'red' },
    { label: 'green', value: 'green' },
    { label: 'blue', value: 'blue' },
  ]

  return (
    <Dropdown
      options={options}
      onChange={handleChange}
      value={currentSelection}
    />
  )
}

export default App
