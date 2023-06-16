// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        document.title = 'TextUtils - Dark Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
        {/* <Routes>
          <Route path="/about" element={<About />} >
          </Route> */}
          {/* <Route path="/TextForm" element={<TextForm heading = "Enter the text to analyze" mode={mode}/>}> */}
          <TextForm heading = "Enter the text to analyze" mode={mode}/>
          {/* </Route>
        </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;