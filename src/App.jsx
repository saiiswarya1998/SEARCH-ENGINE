import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import ThemeToggle from './ThemeToggle'
import Form from './Form'
import Gallery from './Gallery'

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <Form />
      <Gallery />
    </main>
  )
}

export default App
