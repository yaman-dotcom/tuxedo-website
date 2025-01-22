import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './App 1340px .css'
import './App 1100px.css'

import Home from './pages/home'
import Header from './pages/genral/header'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route index element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
