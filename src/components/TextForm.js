import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter your text Here')

    const handleUpClick = () => {
        //console.log("Uppercase Button Clicked with text" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick = () => {
        //console.log("Uppercase Button Clicked with text" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleClearText = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared!","success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!","success");
    }   

    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!","success");
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }

    //text = "rewqeuouo"; // wrong way to change the state
    //setText("new text"); //Right way to change the state
    return (
        <>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'#020c37'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#293d61':'white', color:props.mode==='dark'?'white':'#020c37'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'#020c37'}}>
                <h3>Your text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and having {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>
        </>
    )
}
