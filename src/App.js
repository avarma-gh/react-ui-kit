import React from 'react'
import TestToast from './components/Toast/TestToast'
import TestTheme from './components/Theme/TestTheme'
import ToastProvider from './components/Toast/ToastContext'
import ThemeProvider from './components/Theme/ThemeContext'
import CommentProvider from './components/CommentThread/CommentContext'
import CommentThread from './components/CommentThread/CommentThread'
import TestModal from './components/Modal/TestModal'

const App = () => {
  //TODO
  //FIXME
  return (
    <>
      <div id="modal-root"></div>
      <h1>Test</h1>
      <ThemeProvider>
        <ToastProvider>
          <TestModal />
          <div className="">
            <TestTheme /> {/* Dark/Light Theme Toggle */}
            <TestToast /> {/* Toast Notification */}
            <CommentProvider>
              <div className="min-h-screen bg-gray-100 p-10">
                <CommentThread />
              </div>
            </CommentProvider>
          </div>
        </ToastProvider>
      </ThemeProvider>
    </>
  )
}

export default App
