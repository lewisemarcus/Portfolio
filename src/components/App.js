import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import { Home, Projects, Resume } from "./index"
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Projects" element={<Projects />}></Route>
                <Route exact path="/Resume" element={<Resume />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default App
