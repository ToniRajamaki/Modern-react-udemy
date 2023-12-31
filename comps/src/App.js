import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Sidebar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import WorkExperiencePage from './pages/WorkExperiencePage'

function App() {
  return (
    <div className='container mx-atuo grid grid-cols-6 gap-4 nt-4'>
      <Sidebar />
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
        <Route path='/modal' exact>
          <ModalPage />
        </Route>
        <Route path='/table' exact>
          <TablePage />
        </Route>
        <Route path='/experience' exact>
          <WorkExperiencePage />
        </Route>
      </div>
    </div>
  )
}

export default App
