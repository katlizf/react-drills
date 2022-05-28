import './App.css'
import Todo from './Todo';
import React, {useState} from 'react'

function App() {

    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState([])

    const displayTasks = tasks.map((element, index) => {
        return <Todo task={element} key={index} />
    })

    return (
        <div className="App">
            <h1>My to-do list:</h1>
            <input onChange={e => setInput(e.target.value)}></input>
            <button onClick={() => setTasks([...tasks, input])}>Add</button>
            {displayTasks}
        </div>
    )
}

export default App;
