import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Home, Project } from "./index"
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Projects" element={<Project />}></Route>
            </Routes>
        </Router>
    )
}

export default App
