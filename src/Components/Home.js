import React from 'react'
import { useState } from 'react';
import '../App.css';
import Alert from './Alert';
// import Navbar from './Navbar';
import TextArea from './TextArea';
// import About from './Components/About';
// import {Routes, Route} from 'react-router-dom';

export default function Home() {
    // const [modes, setModes] = useState('light')

  //alert functions
  const [alert, setAlert] = useState (null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  return (
    <>
    {/* <Navbar title='Ohee-App' about='about us'/> */}
    {/* <Navbar modes={modes} toogleMode={toogleMode} orangeMode={orangeMode} 
    greenMode={greenMode} pinkMode={pinkMode}/> */}
    <Alert alert={alert}/>
    <TextArea title='Enter your text Below' showAlert={showAlert} />
    {/* <About/> */}
    </>
  );
}
