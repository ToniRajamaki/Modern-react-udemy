import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div>
      <Link to='/accordion'>Go To Accordion</Link>
      <Link to='/dropdown'>Go To dropdown</Link>
      <div>
        <Route path='/accordion' exact>
          <AccordionPage />
        </Route>
        <Route path='/dropdown' exact>
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
}

export default App
