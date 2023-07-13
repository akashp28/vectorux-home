import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Routes>
                <Route path="/" exact element={<Home />}> </Route>

            </Routes>
        </>
    )
}

export default App
