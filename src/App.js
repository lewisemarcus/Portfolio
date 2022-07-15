import "./App.scss"
import { Footer } from "./components/common/Footer"
import { Pages } from "./components/pages/Pages"
import AOS from "aos"
import { useEffect } from "react"
import BasicSpeedDial from "./components/SpeedDial"
import "aos/dist/aos.css"
function App() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <>
            <Pages />
            <BasicSpeedDial />
            <Footer />
        </>
    )
}

export default App
