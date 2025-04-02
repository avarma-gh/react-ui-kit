import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
