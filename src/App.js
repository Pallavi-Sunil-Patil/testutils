// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Testform from './Components/Testform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] =useState ('light'); // light and dark mode 
  const [alert, setAlert] =useState (null); // alert

  const setShowAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "black";
      setShowAlert('Dark mode anabled', "success")
      document.title = 'TextUlits - dark';
    }
    else {
      setMode('light')
       document.body.style.backgroundColor = "white";
       setShowAlert('Light mode anabled', "success");
       document.title = 'TextUlits - Light';
    }
  }
  return (
    <>
      <Router>
      <Navbar title2="TextUtils2" aboutText="About more us" mode={mode} setMode={setMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={
          <Testform 
            heading="Fill the Form" 
            mode={mode} 
            setShowAlert={setShowAlert}
          />
        } />
      </Routes>
   
      </div> 
      </Router>
    </>
  );
}

export default App;
