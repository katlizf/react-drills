import React, {useState} from 'react'

function NewTask (props) {

    const [input, setInput] = useState('')

    const handleInput = value => setInput(value)

    return (
        <div>
            <input onChange={e => handleInput(e.target.value)}></input>
            <button onClick={() => props.addTask(input)}>Add</button>
        </div>
    )
}

export default NewTask