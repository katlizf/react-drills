import './App.css'
import Router from './components/Router'
import {Link} from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/details'>Details</Link>
                    <Link to='/signup'>Signup</Link>
                </ul>
            </nav>
            <Router />
        </div>
    )
}

export default App