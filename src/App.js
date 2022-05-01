import React, { createContext } from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import "./App.css";
import Home from "./component/home";
import Contact from "./component/contact";
import Student from "./component/student";
import Form from "./component/Form"
import { StudContext } from "./component/context";

export const al=createContext();
function App() {
  return (
      <div className="App">
        <div className="Navbar">
          <Link to='/home' className='link'>Home</Link>
          <Link to='/student' className='link'>Students</Link>
          <Link to='/contact' className='link'>Contact US</Link>
        </div>
        <StudContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student-Form" element={<Form  btn={"Add"}/>} />
            <Route path="/student/:id" element={<Form btn={"Update"}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to='/' />} />
          </Routes>
        </StudContext>
      </div>
    
    
    

  )
}


export default App;