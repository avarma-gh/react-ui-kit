import React, { createContext, useState } from 'react'

// Create ToastContext
export const ToastContext = createContext()

// Create ToastProvider
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  // Function to add a toast
  const addToast = (message, type = 'success') => {
    const id = Date.now()
    setToasts([...toasts, { id, message, type }])

    // Remove the toast after 3 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Notifications Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded shadow-lg text-white text-sm ${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider
