import React from 'react'
import TestToast from './components/Toast/TestToast'
import ToastProvider from './components/Toast/ToastContext'
const App = () => {
  return (
    <>
      {/* Toast Notification  */}
      <ToastProvider>
        <TestToast />
      </ToastProvider>
    </>
  )
}

export default App
