import React, { useState } from 'react'
import { nanoid } from 'nanoid';


const Create = (props) => {

    const todos=props.todos;
    const settodos=props.settodos;

       const [title, settitle] = useState("");
       const [discription, setdiscription] = useState("")
     
    const submitHandler = (e)=>{
    e.preventDefault();

    const newTodo ={
      id:nanoid(),
      title,
      discription,
      isCompleted:false,
    }
    // const copytodos = [...todos];
    // copytodos.push(newTodo);
    // settodos(copytodos);   // is same as the below line

     settodos([...todos , newTodo])

     //empty the title inputs
     settitle("");
     setdiscription("")

  }


  return (
    <div>
       <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
        onChange={(e)=>{
          settitle(e.target.value)}}
          value={title}
         type="text"
          placeholder='Title' />
        <br /> <br />
         <input
        onChange={(e)=>{
          setdiscription(e.target.value)}}
          value={discription}
         type="text"
          placeholder='discription' />
           <br /> <br />
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default Create