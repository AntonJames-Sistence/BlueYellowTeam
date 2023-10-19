import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/home'
import Vite from './components/vite'

function App() {
  return (
    <BrowserRouter basename='/home' element={<HomePage/>}>
      <Routes>
          <Route path="vite" element={<Vite/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
