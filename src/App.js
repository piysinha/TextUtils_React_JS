import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#020c37';
      showAlert("Dark Mode has been enabled!", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success");
      document.title = 'TextUtils - Light Mode';
    }
    //if(mode === 'light' ? 'dark' : 'light');
    //setMode('dark')
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title='TextUtils' aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Exter your Text to Analyze Below" mode={mode}/>} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </div >
      </BrowserRouter>
    </>
  );
}

export default App;
