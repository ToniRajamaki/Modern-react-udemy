import React from 'react'
import Button from '../components/Button'
import { GoBell, GoAlert, GoDatabase } from 'react-icons/go'

function ButtonPage() {
  const handleClick = (e) => {
    console.log('clicking the button with class:', e.target.className)
  }

  return (
    <div>
      {/* TODO there is something weird going on when using classname */}
      <div>
        <Button onClick={handleClick} primary className='outline-offset-4'>
          <GoAlert />
          Click me
        </Button>
      </div>
      <div>
        <Button outline secondary rounded>
          <GoBell />
          Buy me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div>
        <Button warning>Hide ads</Button>
      </div>
      <div>
        <Button success rounded outline>
          Something
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
