import React, { useEffect, useState } from "react";
import "./form.css";
export default function Form() {
 const options=['A','B','C','D','E','F']
 const [showOptions,setShowOptions]=useState(options)
 const [option1,setOption1]=useState('')
 const [option2,setOption2]=useState('')
 const [option3,setOption3]=useState('')
 useEffect(() => {
   setShowOptions(options) 
  },[option1,option2,option3])
  return (
    <div className="container">
        <h2 class="logo-text">SAMOORA</h2>
        <form >
            <label class="option-label">Option one</label> <br/>
            <select name="option" onChange={(e)=>{setOption1(e.target.value)}}>
                <option value="">None</option>
                {showOptions.map((option)=>{
                   if (option !== option2 && option !== option3){
                    return (<option value={option}>{option}</option>)}
                })}
            </select>

            <label class="option-label">Option Two</label> <br />
            <select name="option" onChange={(e)=>{setOption2(e.target.value)}}>
                <option value="">None</option>
                {showOptions.map((option)=>{
                    if (option !== option1 && option !== option3){
                    return (<option value={option}>{option}</option>)}
                })}
            </select>

            <br/>
            <label class="option-label">Option Three</label> <br />
            <select name="option" onChange={(e)=>{setOption3(e.target.value)}}>
                <option value="">None</option>
                {showOptions.map((option)=>{
                   if (option !== option1 && option !== option2){
                    return (<option value={option}>{option}</option>)}
                })}
            </select>

            <br/>
            <button type="button" onClick={()=>{console.log(option1,option2,option3)}}className="form-btn">Submit</button>
        </form>
    </div>
  );
}
