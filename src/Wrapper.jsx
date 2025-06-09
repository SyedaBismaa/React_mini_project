import { createContext , useState} from 'react';
//wrapper is a component which takes a component as a prop and returns a component

 export const todoContext = createContext(null);

const Wrapper = (props) => {

    const [todos, settodos] = useState([
    {id:1 , title: "complete dom project" , isCompleted : false }
  ]);


  return (
    <todoContext.Provider value={[todos, settodos]}>
        {props.children}
    </todoContext.Provider>
  )
}

export default Wrapper