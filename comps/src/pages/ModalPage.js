import React from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'
import Button from '../components/Button'

function ModalPage() {
  const [showModal, SetShowModal] = useState(false)
  const onClose = () => {
    SetShowModal(false)
  }
  const handleClick = () => {
    SetShowModal(true)
  }
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal onClose={onClose}></Modal>}
    </div>
  )
}

export default ModalPage
