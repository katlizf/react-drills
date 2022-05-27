import './App.css';
import React, {useState} from 'react'

function App() {

    const [item, setItem] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'])
    const [filter, setFilter] = useState('')

    let foodsToDisplay = item.filter((element, index) => {
        return element.includes(filter)
    }).map((element, index) => {
        return <h2 key={index}>{element}</h2>
    })

    return (
        <div className="App">
            <input onChange={e => setFilter(e.target.value)}></input>
            {foodsToDisplay}
        </div>
    )
}

export default App;
