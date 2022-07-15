import "./App.scss"
import { Footer } from "./components/common/Footer"
import { Pages } from "./components/pages/Pages"
import AOS from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"
function App() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <>
            <Pages />
            <Footer />
        </>
    )
}

export default App
