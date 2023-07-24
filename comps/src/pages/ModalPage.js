import React from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'
import Button from '../components/Button'

function ModalPage() {
  const [showModal, SetShowModal] = useState(false)
  const handleClose = () => {
    SetShowModal(false)
  }
  const handleClick = () => {
    SetShowModal(true)
  }
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  )

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is some really important thing you should know!</p>
    </Modal>
  )
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage
