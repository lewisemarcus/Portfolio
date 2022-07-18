import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { HashRouter as Router, Route, Routes, Switch } from "react-router-dom"
import { Projects } from "./Projects"
import Contact from "../Contact/Contact"
import ParticleEffect from "../common/Particles"
export const Pages = () => {
    return (
        <>
            <Router>
                <ParticleEffect />
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/Contact" component={Contact} />
                </Switch>
            </Router>
        </>
    )
}
