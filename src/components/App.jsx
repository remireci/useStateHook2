import React, { useState } from "react";

function App() {
  //let time = new Date().toLocaleTimeString();
  const [time, setTime] = useState(0);

  function showTime() {
    setTime(new Date().toLocaleTimeString());
  }

  console.log(time);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
