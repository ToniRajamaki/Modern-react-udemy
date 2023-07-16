import SearchBar from './components/SearchBar'
import searchImages from './api'
import ImageList from './components/ImageList'
import { useState } from 'react'

function App() {
  const [Images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      <ImageList images={Images}></ImageList>
    </div>
  )
}
export default App
