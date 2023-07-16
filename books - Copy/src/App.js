import React from 'react'
import BookList from './components/BookList'
import BookShow from './components/BookShow'
import BookEdit from './components/BookEdit'
import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      } else {
        return book
      }
    })
    setBooks(updatedBooks)
  }

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const createBook = (title) => {
    console.log('Need to add book with:', title)
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ]
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookByID} />
      {console.log('books', books)}
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
