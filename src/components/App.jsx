import React, { useState } from "react";

function App() {
  // Creating usestate to track state of the input
  const [name, setName] = useState("");

  // keep track of the heading state
  const [heading, setHeading] = useState("");

  // function to handlechange from form input
  function handleChange(event) {
    setName(event.target.value);
  }

  // function to handleClick from the submit button
  function handleClick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
