import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import { Home, Projects, Resume, Contact } from "./index"
function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Projects" element={<Projects />}></Route>
                <Route exact path="/Resume" element={<Resume />}></Route>
                <Route exact path="/Contact" element={<Contact />}></Route>
            </Routes>
        </HashRouter>
    )
}

export default App
