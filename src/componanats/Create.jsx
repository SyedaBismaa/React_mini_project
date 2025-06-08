import React, { useState } from 'react'
import { nanoid } from 'nanoid';


const Create = (props) => {

  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    }
    // const copytodos = [...todos];
    // copytodos.push(newTodo);
    // settodos(copytodos);   // is same as the below line

    settodos([...todos, newTodo])

    //empty the title inputs
    settitle("");

  }


  return (
    < div className=' rounded p-10 w-[50%] mx-auto  text-white'>
      <h1 className='text-4xl font-thin'>Set <span className='text-red-300 '>Remainders</span> For <br />Task</h1>
      <form
        className=' flex  justify-start flex-col p-5 mt-10 '
        onSubmit={submitHandler}>
        <input
          className='border-b w-full p-2 rounded outline-0'
          onChange={(e) => {
            settitle(e.target.value)
          }}
          value={title}
          type="text"
          placeholder='Title' />
        <br /> <br />

        <button
          className='border p-2 rounded'
        >Create Task</button>
      </form>
    </ div>
  )
}

export default Create