import React from 'react'
import { useContext, useState, createContext, useEffect } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const storedDarkMode = localStorage.getItem('darkTheme')

  if (storedDarkMode === 'true') {
    return storedDarkMode
  }

  return prefersDarkMode
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  })
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
