import React, { useState } from 'react'
import Modal from './Modal'

const TestModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleTest1 = () => {
    setIsOpen(false)
  }
  const handleTest2 = () => {
    setIsOpen(false)
  }
  const handleTest3 = () => {
    setIsOpen(false)
  }
  const handleTest4 = () => {
    setIsOpen(false)
  }
  const handleTest5 = () => {
    setIsOpen(false)
  }

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
