import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";
import { useContext } from "react";
import { todoContext } from "../Wrapper";


const Create = () => {

  const  [todos, settodos] =  useContext(todoContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }=useForm();

  const submitHandler = (data) => {
   data.isCompleted = false;
   data.id=nanoid();
 
   const copytodos=[...todos];
   copytodos.push(data);
   settodos(copytodos);
    
   toast.success("Task Added Successfully")

   reset();


  }

  //  console.log(errors);

  return (
    < div className=' rounded p-10 w-[50%] mx-auto  text-white'>
      <h1 className='text-4xl font-thin'>Set <span className='text-red-300 '>Remainders</span> For <br />Task</h1>
      <form
        className=' flex  justify-start flex-col p-5 mt-10 '
        onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title" ,{required:"Title cannot Be Empty"})}
          className='border-b w-full p-2 rounded outline-0'
          type="text"
          placeholder='Title' />
    
           <small className=" mt-2 text-red-400">{errors?.title?.message}</small>
        <br />
        <br />
        <button
          className='border p-2 rounded'
        >Create Task</button>
      </form>
    </ div>
  )
}

export default Create