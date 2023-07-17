import Accordion from './components/Accordion'

function App() {
  const items = [
    { id: 'asd1', label: 'header', content: 'This is the content' },
    {
      id: 'asd3',
      label: 'header2',
      content: 'This is the content This is the content',
    },
    {
      id: 'asd2',
      label: 'header3',
      content: 'This is the content This is the content This is the content',
    },
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
