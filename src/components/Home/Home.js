import * as React from "react"
import Container from "@mui/material/Container"
import { Hero, BottomNav, AboutText } from "./index"
import Fade from "@mui/material/Fade"
import ParticleEffect from "./Particles"

const Home = () => {
    const heroStyle = {
        position: "relative",
        zIndex: "0 !important",
    }
    return (
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
    )
}
export default Home
