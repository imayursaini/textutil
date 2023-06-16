import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    }

    const handleOnchange = (event)=>{
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode=== 'dark'?'grey':'white' , color:props.mode=== 'dark'?'white':'black'}} id="My Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}> Convert to Upper Case</button>     
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}> Convert to Lower Case</button>     
        <button className="btn btn-primary mx-2 my-1" onClick={removeSpace}> Remove Extra Spaces</button>     
    </div>
    <div className="contain" style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h1>Your Text Summary </h1>
        <p>{text.split(' ').length} words and {text.length}character</p>
        <p> {0.008 * text.split(' ').length } Minute to Read</p>
        <h3> Preview </h3>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
  )
}
