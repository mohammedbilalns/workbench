import Navbar from './components/Navbar'
import Home from './components/Home'
import { lazy } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
const About = lazy(()=>import("./components/About")) 

function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar></Navbar>

  <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
    <Route path='/about' element={<About></About>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
