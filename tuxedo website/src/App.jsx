import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './App 1340px .css'
import './App 1100px.css'
import './App 920px.css'

import Home from './pages/home'
import StorePage from './pages/store'
import Header from './pages/genral/header'

function App() {


  return (
    <>
    <BrowserRouter basename="/">
    <Header/>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/store' element={<StorePage/>}/>
    {/* <Route path="/store" element={<h1>Store Page is working!</h1>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
