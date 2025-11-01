

import { createRoot } from "react-dom/client";
import { useState } from "react";

function App(){
  const [count , setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//Component (Here I defining How mybutton Work)

function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return (
  <button onClick={onClickHandler}>Counter : {props.count}</button>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
