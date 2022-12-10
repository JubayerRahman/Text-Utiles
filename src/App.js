import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import TextArea from './Components/TextArea';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [modes, setModes] = useState('light')

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
  //mode functuions
  const toogleMode =()=>{
    if(modes==='light' || modes==='orange'|| modes==='green' || modes==='pink'){
      setModes('dark');
      document.body.style.backgroundColor='rgb(31, 31, 80)';
      document.body.style.color='white';
      showAlert("daek mode enable", 'success')
    }
    else{
      setModes('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("light mode enable", 'success')
    }
  }
  const orangeMode =()=>{
    if(modes==='light' || modes==='dark'|| modes==='green' || modes==='pink'){
      setModes('orange');
      document.body.style.backgroundColor='rgb(226, 171, 69)';
      document.body.style.color='white';
      showAlert("Orange mode enable", 'success')
    }
    else{
      setModes('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Orange Mode Disabled", 'success')
    }
  }
  const greenMode =()=>{
    if(modes==='light' || modes==='dark'|| modes==='orange' || modes==='pink'){
      setModes('green');
      document.body.style.backgroundColor='rgb(9, 65, 9)';
      document.body.style.color='white';
      showAlert("greem mode enable", 'success')
    }
    else{
      setModes('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("green Mode Disabled", 'success')
    }
  }
  const pinkMode =()=>{
    if(modes==='light' || modes==='dark'|| modes==='orange' || modes==='green'){
      setModes('pink');
      document.body.style.backgroundColor='rgb(231, 157, 169)';
      document.body.style.color='white';
      showAlert("Orange mode enable", 'success')
    }
    else{
      setModes('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Orange Mode Disabled", 'success')
    }
  }
  return (
    <>
    {/* <Navbar/> */}
    {/* <Navbar title='Ohee-App' about='about us'/> */}
    <Navbar modes={modes} toogleMode={toogleMode} orangeMode={orangeMode} 
    greenMode={greenMode} pinkMode={pinkMode}/>
    <Alert alert={alert}/>
    <Routes>
        <Route path='Text-Utiles' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
    </Routes>
    {/* <TextArea title='Enter your text Below' showAlert={showAlert} modes={modes}/> */}
    {/* <About/> */}
    </>
  );
}

export default App;
