

// Text-Area

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function TextArea() {
  const [mytext, setmyText] = useState("");

  function HandleUpdate(event) {
    setmyText(event.target.value);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    alert("Submitted Content: " + mytext);
  }

  const content = {
    backgroundColor: "#c76719ff",
    margin: "100px",
    padding: "50px",
    textAlign: "center",
  };

  const content2 = {
    height: "100px",
    width: "500px",
    border: "solid 2px",
  };

  return (
    <form style={content} onSubmit={HandleSubmit}>
      <label>
        Write Something : <br />
        <textarea
          value={mytext}
          onChange={HandleUpdate}
          style={content2}
        />
        <p>Content : {mytext}</p>
        <button type="submit">Submit</button>
      </label>
    </form>
  );
}

createRoot(document.getElementById('root')).render(<TextArea />);
