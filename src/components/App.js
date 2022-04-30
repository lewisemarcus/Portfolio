import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Home, Projects, Resume } from "./index"
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
                <Route path="/Resume" element={<Resume />}></Route>
            </Routes>
        </Router>
    )
}

export default App
