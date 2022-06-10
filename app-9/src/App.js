import './App.css'
import router from './components/Router'
import { Link } from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/details">Details</Link>
                </ul>
            </nav>
            {router}
        </div>
    )
}

export default App