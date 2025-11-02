

import { createRoot } from "react-dom/client";
import { useState } from "react";

function App(){
  const [todos , setTodos] = useState([{
    title :"Morning Lectures",
    Description : " Lecture Time 9am to 11am ",
    completed : false,
  }, {
    title :"Afternoon Assignment",
    Description : " BioChemistry Slides  ",
    completed : true,
  } ,{
    title :"Group Discussion ",
    Description : " Testing Planning and Deployment",
    completed : false,
  },]);

  function addtodo(){
    // ...(dot) It spread All the Original Values that  is array of [1,2]
    setTodos([...todos , {
      title : "New Todos",
      Description : "Description of new Todos",
    }])
  }
  return (
   <div>
     <button onClick={addtodo}>Add Random </button>
     <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.Description}</p>
          <p>status : {todo.completed}</p>
        </li>
      ))}
     </ul>
   </div>
  );
}
function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.Description}</h2>
    </div>
  )
}
createRoot(document.getElementById('root')).render(<App/>)