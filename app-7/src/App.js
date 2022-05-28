import './App.css'
import React, {useState} from 'react'
import NewTask from './NewTask'
import List from './List'

function App() {

    const [tasks, setTasks] = useState([])

    return (
        <div className="App">
            <NewTask addTask={(task) => setTasks([...tasks, task])} />
            <List tasks={tasks} />
        </div>
    )
}

export default App;
