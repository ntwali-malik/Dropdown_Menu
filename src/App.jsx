import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Service1 from './Components/Service1';
import Service2 from './Components/Service2';
import Service3 from './Components/Service3';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services/service1' element={<Service1 />}/>
        <Route path='/services/service2' element={<Service2 />}/>
        <Route path='/services/service3' element={<Service3 />}/>
      </Routes>
    </Router>
  )
}

export default App
