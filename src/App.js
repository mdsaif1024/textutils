// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  // useRouteMatch,
  // useParams,
  Routes
} from "react-router-dom";

import React, { useState } from 'react'

// let name = "Saif";
function App() {
  const [mode, setMode] = useState("light")
  const [mode1, setMode1] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }



  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode enabled", "success")
    }

  }
  const toggleMode1 = () => {
    if (mode1 === 'light') {
      setMode1('green')
      document.body.style.backgroundColor = 'green'
      showAlert("Green mode enabled", "success")
    }
    else {
      setMode1('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} mode1={mode1} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
