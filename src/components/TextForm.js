import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');
    }
    const handleLowerClick = () => {
        console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-4' onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary' onClick={handleLowerClick}>Convert to Lowercase</button>
            </div>
            <div className="container"style={{color:props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
