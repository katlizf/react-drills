import "./App.css";
import React, { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    return (
        <div className="App">
            <input onChange={handleChange}></input>
            <div>
                <span>{userInput}</span>
            </div>
        </div>
    );
}

export default App;


// ----- SOLUTION -----
// import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [input, setInput] = useState("")
//   return (
//     <div className="App">
//       <input type="text" onChange={(e) => setInput(e.target.value)}/>
//       <p>{input}</p>
//     </div>
//   );
// }

// export default App;