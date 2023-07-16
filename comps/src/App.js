import React from 'react'
import Button from './Button'
import { GoBell, GoAlert, GoDatabase } from 'react-icons/go'

function App() {
  return (
    <div>
      <div>
        <Button primary>
          <GoAlert></GoAlert>
          Click me
        </Button>
      </div>
      <div>
        <Button outline secondary rounded>
          <GoBell></GoBell>
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
        <Button warning >
          Hide ads
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Something
        </Button>
      </div>
    </div>
  )
}

export default App
