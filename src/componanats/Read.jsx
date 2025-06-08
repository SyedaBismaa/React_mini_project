
const Read = (props) => {
     const todos=props.todos;
    const settodos=props.settodos;

     const DeleteHandeler = (id) =>{
      const filteredTodos=todos.filter((todos)=>todos.id !=id);
      settodos(filteredTodos);
      
     }
 const renderTodos = todos.map(todos=>{
    return <li
    className="flex justify-between items-center p-2 bg-gray-900 rounded mt-5"
    key={todos.id}>
      {todos.title}  
      <button
      className="font-thin text-red-400 text-sm"
       onClick={()=>DeleteHandeler(todos.id)}>Delete</button>
      </li> 
  })

  return (
    < div className="rounded p-10 w-[50%] mx-auto text-center text-white ">
        <h1 className='text-4xl font-thin '><span className="text-yellow-500">Pending</span> Tasks</h1>
      <ol>{renderTodos}</ol>
    </ div >
  )
}

export default Read;