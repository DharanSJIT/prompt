import { useState } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [showLogin, setShowLogin] = useState(true)

  return showLogin ? <Login /> : <Signup />
}

export default App
