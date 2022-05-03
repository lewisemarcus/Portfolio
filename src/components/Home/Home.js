import * as React from "react"
import Container from "@mui/material/Container"
import { Hero, BottomNav, AboutText } from "./index"
import Fade from "@mui/material/Fade"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Zoom from "@mui/material/Zoom"
import Box from "@mui/material/Box"
import ParticleEffect from "./Particles"

function ScrollTop(props) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    })
    return (
        <Zoom unmountOnExit in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 100, right: 10 }}
            >
                {children}
            </Box>
        </Zoom>
    )
}

const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor",
    )
    if (anchor) {
        anchor.scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    }
}
const Home = (props) => {
    const heroStyle = {
        position: "relative",
        zIndex: "0 !important",
    }
    return (
        <React.Fragment>
            <div id="back-to-top-anchor"></div>
            <Container>
                <ParticleEffect />
                <Fade unmountOnExit in={true} timeout={2000}>
                    <div style={heroStyle}>
                        <Hero />
                        <AboutText />
                        <BottomNav />
                    </div>
                </Fade>
            </Container>
            <ScrollTop {...props}>
                <Fab
                    className={"scrollTop"}
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}
export default Home
