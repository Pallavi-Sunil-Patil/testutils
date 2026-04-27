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
    <form style={{color:props.mode==='light'?'black':'white'}}>
      <h1 className="my-3 text-center">{props.heading}</h1>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email address</label>
        <input
          type="email"
          className="form-control"
          style={{backgroundColor:props.mode==='light'?'white':'#00000000', color:props.mode==='light'?'black':'white'}}
          id="exampleFormControlInput1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode==='light'?'white':'#00000000', color:props.mode==='light'?'black':'white'}}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}              // ✅ connected state
          onChange={handleOnChange} // ✅ updates state
        ></textarea>
      </div>

      <button type="button" className="btn btn-primary my-3" onClick={handleUpperCase} >
        Convert to UpperCase
      </button>

      <button type="button" className="btn btn-primary my-3 mx-4"  onClick={handleLowerCase} >
        Convert to LowerCase
      </button>

      <button type="button" className="btn btn-primary my-3 mx-4"  onClick={handlecleartext} >
        Clear text
      </button>

      <button type="button" className="btn btn-primary my-3 mx-4"  onClick={handleItalic} >
        Capitlize text
      </button>

      <button type="button" className="btn btn-primary my-3 mx-4"  onClick={handleExtraspace} >
        Extra Space remove
      </button>

      <button type="button" className="btn btn-primary my-3 mx-4"  onClick={handleCopyText} >
        Copy text
      </button>
    </form>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <div>{text.length>0?text: "Enter text in above textArea to preview here"}</div>
    </div>
    </>
  );
}