import Accordion from './components/Accordion'

function App() {
  const items = [
    {
      id: 'asd1',
      label: 'What is the meaning of life?',
      content: 'According to some people its #42',
    },
    {
      id: 'asd3',
      label: 'What is the fundamental rule of learning?',
      content: 'You have to apply your knowledge.',
    },
    {
      id: 'asd2',
      label: 'How many questions there are in total?',
      content: 'There is three questions. Or is there?',
    },
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
