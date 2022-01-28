import React, {useState} from "react";//use hook to change state

export default function Textform(props) {
    const [text,setText]=useState('Enter your text here');//state variable

    const onClickUpHandle = ()=>{//arrow function
        // console.log('onclickuphandle invoked');
        let newText=text.toUpperCase();//javascript function to change string into uppercase 
        setText(newText);
        props.showAlert("Text has been changed to Uppercase","success");
    }

    const onClickLoHandle = ()=>{//arrow function
        // console.log('onclickLohandle invoked');
        let newText=text.toLowerCase();//javascript function to change string into lowercase 
        setText(newText);
        props.showAlert("Text has been changed to Lowercase","success");
    }

    const onClickClear = ()=>{//arrow function
        // console.log('onclickClear invoked');
        let newText="";//javascript function to change string into empty 
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }

    const onChangeHandle= (event)=>{ //arrow function
        // console.log('onchangehandle invoked');
        setText(event.target.value);
    }

  return (
      <>
        <div style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{ props.heading }</h1> 
        <div className="mb-3">
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={onChangeHandle}
            style={{backgroundColor: props.mode === 'dark' ? '#444444' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'  }}
            
            ></textarea>
        </div>
        <button disabled= {text.length===0} className="btn btn-primary mx-3" onClick={onClickUpHandle}>Convert to Uppercase</button>
        <button disabled= {text.length===0} className="btn btn-primary mx-3" onClick={onClickLoHandle}>Convert to Lowercase</button>
        <button disabled= {text.length===0} className="btn btn-primary mx-3" onClick={onClickClear}>Clear text</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your Text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read this </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  );
}
