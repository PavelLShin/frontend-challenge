import './App.css'

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import Headers from './Components/Headers'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
