import React, { useState } from 'react';
// import Navbar from './Navbar';

export default function About() {
    const [btn, setBtn] = useState("enable Dark mode")
    const [style, setStyle] = useState({
        backgroundColor: 'white',
        color: 'black'
    })
    const modeChange =()=>{
        if(style.color ==='black'){
            setStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid white',
            })
            setBtn('Enable light mode')
        }
        else{
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtn('Enable Dark mode')
        }
    }
    const [btn1, setBtn1] = useState("change to green")
    const [oheeStyle, setOheeStyle] = useState({
        color: 'black'
    })
    const oheeModeChange =()=>{
        if(oheeStyle.color ==='black'){
            setOheeStyle({
                color: 'green',
            })
            setBtn1('change to purple')
        }
        else if(oheeStyle.color==='green'){
            setOheeStyle({
                color:'purple'
            })
            setBtn1('change to red')
        }
        else if(oheeStyle.color==='purple'){
            setOheeStyle({
                color:'red'
            })
            setBtn1('change to black')
        }
        else{
            setOheeStyle({
                color: 'black'
            })
            setBtn1('change to green')
        }
    }
  return (
    <div>
      {/* <Navbar/> */}
      <div className='container my-3' style={style}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={style} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"style={style} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" style={style}>
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={style} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={style}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button onClick={modeChange} className='btn btn-primary my-3'>{btn}</button>

<div className='contaier'>
    <h1 style={oheeStyle}>Jobayer rahman Ohee</h1>
    <button onClick={oheeModeChange} className='btn btn-primary my-3'>{btn1}</button>
</div>
      </div>
    </div>
  )
}
