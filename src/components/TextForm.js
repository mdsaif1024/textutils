import React, { useState } from 'react'


const TextForm = (props) => {
  function changeToUpperCase() {
    // console.log('button clicked');
    setText(text.toUpperCase())
    props.showAlert("Converted to UPPER CASE","success")
  }
  function changeToLowerCase() {
    // console.log('button clicked');
    setText(text.toLowerCase())
    props.showAlert("Converted to lower case","success")
  }
  
  function handleClrClick() {
    // text.search(alert())
    setText("")
    props.showAlert("Text cleared","success")
  }
  function handleRemoveExtraSpaceClick() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  
  function onHandleChange(e) {
    // console.log('handle change');
    setText(e.target.value)
  }
  
  function handleCopyClick(e) {
    let copyText = document.getElementById("myBox");
    
    // Select the text field
    copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text copied!","success")
  }
  const [text, setText] = useState("")
  return (
    <>
      <div className={`container my-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" id="myBox" value={text} onChange={onHandleChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} rows="8"></textarea>
          <button className="btn btn-primary my-2" onClick={changeToUpperCase}>to Upper Case</button>
          <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>to Lower Case</button>
          <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary" onClick={handleRemoveExtraSpaceClick}>Remove Extra Space</button>


        </div>
      </div>

      <div className={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in the above box to display it here"}</p>


      </div>


    </>
  )
}

export default TextForm