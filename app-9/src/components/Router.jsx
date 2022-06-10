import React from 'react'
import Home from './Home'
import Details from './Details'
import Signup from './Signup'
import {Routes, Route} from 'react-router-dom'

function Router() {
    return (
        <div>
            <Routes>
                <Route exact path='/' component={Home} />
                <Route path='/details' component={Details} />
                <Route path='/signup' components={Signup} />
            </Routes>
        </div>
    )
}

export default Router