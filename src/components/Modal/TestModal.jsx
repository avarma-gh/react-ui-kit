import React, { useState } from 'react'
import Modal from './Modal'

const TestModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  //TODO: remove this function
  //FIXME: remove this function

  // add 10 dummy functions
  const dummyFunction1 = () => {}
  const dummyFunction2 = () => {}
  const dummyFunction3 = () => {}
  const dummyFunction4 = () => {}
  const dummyFunction5 = () => {}
  const dummyFunction6 = () => {}
  const dummyFunction7 = () => {}
  const dummyFunction8 = () => {}
  const dummyFunction9 = () => {}
  const dummyFunction10 = () => {}

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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Modal>
    </div>
  )
}

export default TestModal
