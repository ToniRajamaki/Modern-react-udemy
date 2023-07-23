import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import SideBar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'

function App() {
  return (
    <div className='container mx-atuo grid grid-cols-6 gap-4 nt-4'>
      <SideBar />
      <div className='col-span-5'>
        <Route path='/accordion' exact>
          <AccordionPage />
        </Route>
        <Route path='/' exact>
          <DropdownPage />
        </Route>
        <Route path='/buttons' exact>
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App
