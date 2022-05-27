import "./App.css";
import React, { useState } from "react";

function App() {

    const [item, setItem] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])

    let list = item.map((elem, index) => {
      return <h2 key={index}>{elem}</h2>
    })

	  return (
        <div className="App">
            {list}
        </div>
    )
}

export default App;
