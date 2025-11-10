import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import Login from './components/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  // Check if user is already authenticated on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('auth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
    setIsChecking(false)
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('auth')
    sessionStorage.removeItem('authUser')
    setIsAuthenticated(false)
  }

  // Show loading state while checking auth
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  // Show login or landing page based on auth status
  return isAuthenticated ? (
    <LandingPage onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  )
}

export default App

