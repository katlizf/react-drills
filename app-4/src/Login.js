import React, {useState} from 'react'

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let loginAlert = () => {
        alert(`Username: ${username} Password: ${password}`)
    }

  return (
    <div>
        <input onChange={e => setUsername(e.target.value)}></input>
        <input onChange={e => setPassword(e.target.value)}></input>
        <button onClick={loginAlert}>Login</button>
    </div>
  )
}

export default Login