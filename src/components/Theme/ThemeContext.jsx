import React, { createContext, useState, useEffect } from 'react'

// Create context

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(storedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
