import React, { useState } from 'react'

const Textform = (props) => {
  const [text, settext] = useState("write somthing...")

    const change =()=>{
        console.log("upper case...");
        let nexttext = text.toUpperCase();
        settext(nexttext)


        // props.showalert(":upper case","success");
        // setTimeout(() => {
        //   props.showalert(null)
        // }, 1500);
    }

    const changetolower =()=>{
      console.log("Lower Case...");
      let lower = text.toLocaleLowerCase();
      settext(lower)

      // props.showalert(":lower case","success");
      // setTimeout(() => {
      //   props.showalert(null)
      // }, 1500);
    }

    const deletetext = ()=>{
      console.log("delete...");
      let newtext = " ";
      settext(newtext);

      // props.showalert(":delete","success");
      // setTimeout(() => {
      //   props.showalert(null)
      // }, 1500);
    }

    const onchange =(event)=>{
      // console.log("on change...");
      settext(event.target.value)
    }

  return (
    <>
    <div className='container'>
        <div className="mb-3" style={{color:props.mode=="dark"?"white":"black"}}>
            <label htmlFor="textbox">Example textarea</label>
            <textarea value={text} onChange={onchange} className="form-control" style={{backgroundColor : props.mode=="dark"?"gray":"white" , color:props.mode=="dark"?"white":"black"}} id="texbox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={change}>touppercase</button>
        <button className='btn btn-success mx-3' onClick={changetolower}>tolowercase</button>
        <button className='btn btn-danger' onClick={deletetext}>delete</button>
    </div>

    <div className={`container my-3 text-${props.mode=="light"?"dark":"light"}`}>
      <h1>Text Summary</h1>                   
      <p>Number Of characters is {text.length}</p>
    </div>
    </>
  )
}

export default Textform

