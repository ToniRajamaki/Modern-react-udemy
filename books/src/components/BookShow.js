import React from 'react'
import BookEdit from './BookEdit'
import { useState, useContext } from 'react'
import BooksContext from '../context/books'

function BookShow({ book }) {
  const [editBook, setEditBook] = useState(false) //setShowEdit
  const { deleteBookByID } = useContext(BooksContext)
  const handleDeleteClick = () => {
    deleteBookByID(book.id)
  }

  const handleToggleEdit = () => {
    setEditBook(!editBook)
    console.log('editBook', editBook)
  }

  const onSubmit = () => {
    setEditBook(false)
  }

  let content = <h3>{book.title}</h3>
  if (editBook) {
    content = <BookEdit onSubmit={onSubmit} book={book} />
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className='actions'>
        <button onClick={handleToggleEdit} className='edit'></button>
        <button onClick={handleDeleteClick} className='delete'>
          Delete
        </button>
        {/* <BookEdit /> */}
      </div>
    </div>
  )
}

export default BookShow
