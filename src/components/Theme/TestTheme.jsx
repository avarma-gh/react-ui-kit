import React, { useContext } from 'react'
import ThemeProvider, { ThemeContext } from './ThemeContext'

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      >
        <h1 className="text-2xl font-bold">Dark & Light Theme Toggle</h1>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
        >
          Toggle Theme
        </button>
      </div>
    </ThemeProvider>
  )
}

export default App
