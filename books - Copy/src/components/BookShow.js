import React from 'react'
import BookEdit from './BookEdit'
import { useState } from 'react'

function BookShow({ book, onDelete, onEdit }) {
  const [editBook, setEditBook] = useState(false) //setShowEdit

  const handleDeleteClick = () => {
    onDelete(book.id)
  }

  const handleToggleEdit = () => {
    setEditBook(!editBook)
    console.log('editBook', editBook)
  }

  const onSubmit = (id, newTitle) => {
    setEditBook(false)
    onEdit(id, newTitle)
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
