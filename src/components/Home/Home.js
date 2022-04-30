import * as React from "react"
import Container from "@mui/material/Container"
import { Hero, BottomNav, AboutText } from "./index"
import Fade from "@mui/material/Fade"
import ParticleEffect from "./Particles"
import { Link as ReactLink } from "react-router-dom"
const Home = () => {
    const heroStyle = {
        position: "relative",
        zIndex: "0 !important",
    }
    return (
        <ReactLink to="/">
            <Container>
                <ParticleEffect />
                <Fade in={true} timeout={2000}>
                    <div style={heroStyle}>
                        <Hero />
                        <AboutText />
                        <BottomNav />
                    </div>
                </Fade>
            </Container>
        </ReactLink>
    )
}
export default Home
