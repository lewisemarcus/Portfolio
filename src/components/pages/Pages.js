import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { HashRouter as Router, Route, Routes, Switch } from "react-router-dom"
import { Projects } from "./Projects"
import Contact from "../Contact/Contact"
export const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </>
    )
}
