import React, { useState } from 'react'
import Modal from './Modal'

const TestModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  //TODO: Add a modal component to the app
  //FIXME: Add a modal component to the app
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleTest1 = () => {
    setIsOpen(true)
  }
  const handleTest2 = () => {
    setIsOpen(true)
  }
  const handleTest3 = () => {
    setIsOpen(true)
  }
  const handleTest4 = () => {
    setIsOpen(true)
  }
  const handleTest5 = () => {
    setIsOpen(true)
  }
  const handleOpen6 = () => {
    setIsOpen(true)
  }
  console.log(
    'methods',
    handleClose,
    handleOpen,
    handleTest1,
    handleTest2,
    handleTest3,
    handleTest4,
    handleTest5,
    handleOpen6
  )

  return (
    <div className="p-5">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bold">Custom Modal</h2>
        <p className="mt-2">This is a modal using React Portals!</p>
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  )
}

export default TestModal
