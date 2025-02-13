import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './App 1340px .css'
import './App 1100px.css'
import './App 920px.css'

import Home from './pages/home'
import StorePage from './pages/store'
import ContactUsPage from "./pages/contact us";
import Header from './pages/genral/header'
import LogInPage from "./pages/log in page ";
import BagPage from "./pages/bag page";

function App() {


  return (
    <>
    <BrowserRouter basename="/">
  
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/store' element={<StorePage/>}/>
    <Route path="/contact-us" element={<ContactUsPage/>}/>
    <Route path="/log-in" element={<LogInPage/>}/>
    <Route path="/bag" element={<BagPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
