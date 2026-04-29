import React, { useState } from 'react';

export default function Testform(props) {
  const [text, setText] = useState(''); 

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.setShowAlert("Converted to UpperCase","success")
  };

const toCapitalizeCase = (str) => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const handleItalic = () => {
  setText(toCapitalizeCase(text));
  props.setShowAlert("Converted to CapitalizeCase","success")
};

const handleLowerCase =() => {
    setText(text.toLowerCase());
    props.setShowAlert("Converted to LowerCase","success")
  };

const handlecleartext =() => {
  let newtext = ' ';
  setText(newtext);
  props.setShowAlert("Clear Text","success")
};

const handleExtraspace = () => {
  let newText = text.split(/\s+/).join(" ").trim();
  setText(newText);
};

const handleCopyText = () => {
  navigator.clipboard.writeText(text);
  props.setShowAlert("Text Copied","success")
};


  return (
    <>
    <form className="my-5" style={{color:props.mode==='light'?'black':'white'}}>
      <h1 className="my-5 text-center">{props.heading}</h1>

      <div className="form-group">
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode==='light'?'white':'#00000000', color:props.mode==='light'?'black':'white'}}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}              // ✅ connected state
          onChange={handleOnChange} // ✅ updates state
        ></textarea>
      </div>

      <button disabled={text.trim().length === 0} type="button" className="btn btn-primary my-3" onClick={handleUpperCase} >
        Convert to UpperCase
      </button>

      <button disabled={text.trim().length === 0} type="button" className="btn btn-primary my-3 mx-4"  onClick={handleLowerCase} >
        Convert to LowerCase
      </button>

      <button disabled={text.trim().length === 0} type="button" className="btn btn-primary my-3 mx-4"  onClick={handlecleartext} >
        Clear text
      </button>

      <button disabled={text.trim().length === 0} type="button" className="btn btn-primary my-3 mx-4"  onClick={handleItalic} >
        Capitlize text
      </button>

      <button disabled={text.trim().length === 0} type="button" className="btn btn-primary my-3 mx-4"  onClick={handleExtraspace} >
        Extra Space remove
      </button>

      <button disabled={text.trim().length === 0} type="button" className="btn btn-primary my-3 mx-4"  onClick={handleCopyText} >
        Copy text
      </button>
    </form>
    <div className="container my-4 pb-5" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Your text summery</h3>
      <p>{text.split(/\s+/).filter((element)=> {return element.length!=0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=> {return element.length!=0}).length} minutes read</p>
      <h4>Preview</h4>
      <div>{text.length>0?text: "Enter text in above textArea to preview here"}</div>
    </div>
    </>
  );
}