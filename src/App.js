import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import About from "./Components/About";
import { Routes,Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert= (message,type)=>{
      setAlert({
        msg:message,
        type:type
      });

      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#444444';
      showAlert(
        "The dark mode has been enabled"
        , "success"
      )
    }
    else 
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(
        "The light mode has been enabled"
        , "success"
      )
    }
  }
  return (
    <>
    <Router>
    <Navbar title="PROJECT" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <Routes>
          <Route  path="/about" element={ <About /> }/>
          <Route  path="/" element = {<div className="container my-3"> <Textform showAlert={showAlert} heading="Enter your text here to analyze " mode={mode} /></div> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
