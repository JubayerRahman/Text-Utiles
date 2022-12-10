import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextArea(props) {

    // uppercase function
    const upCase =()=>{
        let newText = Text.toUpperCase();
        setext(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    // lowercase function
    const lowerCase=()=>{
        let newText = Text.toLowerCase();
        setext(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }
    //copy function
    const handelCopy=()=>{
    navigator.clipboard.writeText(Text);
    props.showAlert('Copied successfully!', 'success');
    }
    const changeText = (event) =>{
        setext (event.target.value);
    }

    const [Text , setext] = useState('');
    
    return (
    <>
    <div className='container my-3'>
        <h2><span id='wordcount'>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span> Words {Text.length} Characters</h2>
        {/* <h2>{Text.length} Characters</h2> */}
        {/* <h2>{Math.ceil(0.008 * Text.split(" ").length)} Minutes to read</h2> 
        => I dont like this minutes function  */}

    </div>
    <div className='container my-3'>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label ">
        <h2  className='form-label my-3'>{props.title}</h2>
    </label>
    <textarea placeholder='Enter your Text' className="form-control" 
    style={{backgroundColor:props.modes==='dark'?'rgb(31, 31, 80)':'white', 
            color:props.modes==='dark'?'white':'black'}} value={Text} 
    onChange={changeText} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button type="button" onClick={upCase} className="btn btn-primary">Convert to Uppercase</button>
    <button type="button" onClick={lowerCase} className="btn btn-primary mx-3">Convert to Lowercase</button>
    <button type="button" onClick={handelCopy} className="btn btn-primary my-3">Copy the Text</button>
    </div>
    <div className='container'>
        <h2>Text Preview:</h2>
        <p>{Text}</p>
    </div>
    </>
  )
}

TextArea.propTypes ={title:PropTypes.string}
