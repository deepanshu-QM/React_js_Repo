

import { createRoot } from "react-dom/client";
import { useState } from "react";

function App(){
  const [count ,setCount] = useState(0);

  function onClickHandler(){
    setCount(count+1);
  }
  return (
   <div>
     <button onClick={onClickHandler}>Counter : {count}</button>
   </div>
  )
}
createRoot(document.getElementById('root')).render(<App/>)