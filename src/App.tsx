import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { Router } from './router/Router'

const App: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}

export default App