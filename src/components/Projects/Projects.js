import * as React from "react"
import ParticleEffect from "./Particles"
import { ProjectCards, LargeCard } from "./index"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Zoom from "@mui/material/Zoom"
import Box from "@mui/material/Box"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Fab from "@mui/material/Fab"
import BasicSpeedDial from "../SpeedDial"
import ElevateAppBar from "./AppBar"

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
        <Zoom in={trigger} unmountOnExit>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
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

const cardStyle = {
    position: "relative",
    zIndex: "0 !important",
}
const Projects = (props) => {
    return (
        <React.Fragment>
            <div id="back-to-top-anchor"></div>
            <ParticleEffect />

            <div style={cardStyle}>
                <ElevateAppBar />

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <LargeCard />
                    </div>

                    <div style={{ paddingBottom: "100px" }}>
                        <ProjectCards />
                    </div>
                </div>
            </div>
            <ScrollTop {...props}>
                <Fab
                    className={"scrollTop"}
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
            <BasicSpeedDial className={"SpeedDial"} />
        </React.Fragment>
    )
}

export default Projects
