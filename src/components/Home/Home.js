import Contact from "../Contact/Contact"
import { About } from "../pages/About"
import { Projects } from "../pages/Projects"
import { Hero } from "./Hero"

export const Home = () => {
    return (
        <>
            <div id="back-to-top-anchor" style={{ marginBottom: 20 }}></div>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    )
}
