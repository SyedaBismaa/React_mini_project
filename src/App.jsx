import React, { useState } from 'react'
import Create from './componanats/Create';
import Read from './componanats/Read';

const App = () => {

  const [todos, settodos] = useState([
    {id:1 , title: "complete dom project" , isCompleted : false , discription:"lore,m ipsum 35 buyuds iiuyu"}
  ]);


  return (
    <div>
    
    <Create todos={todos} settodos={settodos}/>
    <Read  todos={todos} settodos={settodos}/>

   
    </div>
  )
}

export default App