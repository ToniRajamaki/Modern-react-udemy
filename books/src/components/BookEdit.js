import React from 'react'
import { useState } from 'react'
import BooksContext from '../context/books'
import { useContext } from 'react'
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title)
  const { editBookByID } = useContext(BooksContext)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('newtitleis:', title)
    onSubmit()
    editBookByID(book.id, title)
  }
  return (
    <form onSubmit={handleSubmit} className='book-edit'>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary'>Save</button>
    </form>
  )
}

