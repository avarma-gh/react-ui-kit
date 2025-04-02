import React, { useContext } from 'react'
import ToastProvider, { ToastContext } from './ToastContext' // Import ToastProvider and context

const App = () => {
  const { addToast } = useContext(ToastContext)

  return (
    <ToastProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Toast Notification Demo</h1>
        <button
          onClick={() => addToast('This is a success message!')}
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Show Toast
        </button>
      </div>
    </ToastProvider>
  )
}

export default App
