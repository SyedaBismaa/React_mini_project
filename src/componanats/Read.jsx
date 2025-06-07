
const Read = (props) => {
     const todos=props.todos;
    // const settodos=props.settodos;

 const renderTodos = todos.map(todos=>{
    return <li key={todos.id}>{todos.title}    :    {todos.discription}</li>
  })

  return (
    <>
        <h1>Pending Tasks</h1>
      <ol>{renderTodos}</ol>
    </>
  )
}

export default Read;