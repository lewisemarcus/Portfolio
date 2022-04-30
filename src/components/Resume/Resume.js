import * as React from "react"
import Container from "@mui/material/Container"
import {
    WorkExpCard,
    SkillsCard,
    SummaryCard,
    HeaderCard,
    ReferenceCard,
    EducationCard,
} from "./index"
import ParticleEffect from "./Particles"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Zoom from "@mui/material/Zoom"
import Slide from "@mui/material/Slide"
import Box from "@mui/material/Box"
import { Link as ReactLink } from "react-router-dom"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Fab from "@mui/material/Fab"
import "./Resume.css"

const cardStyle = {
    position: "relative",
    zIndex: "0 !important",
}

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

    return (
        <Zoom in={trigger}>
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

const Resume = (props) => {
    return (
        <ReactLink
            to="/Resume"
            style={{ textDecoration: "none", cursor: "default" }}
        >
            <React.Fragment>
                <div id="back-to-top-anchor"></div>
                <Container>
                    <ParticleEffect />
                    <div style={cardStyle}>
                        <Slide direction="up" in={true} timeout={1000}>
                            <div>
                                <HeaderCard />
                            </div>
                        </Slide>

                        <Slide
                            direction="up"
                            in={true}
                            timeout={1000}
                            style={{ transitionDelay: 250 }}
                        >
                            <div>
                                <SummaryCard />
                            </div>
                        </Slide>
                        <Slide
                            direction="up"
                            in={true}
                            timeout={1000}
                            style={{ transitionDelay: 500 }}
                        >
                            <div>
                                <SkillsCard />
                            </div>
                        </Slide>
                        <Slide
                            direction="up"
                            in={true}
                            timeout={1000}
                            style={{ transitionDelay: 750 }}
                        >
                            <div>
                                <WorkExpCard />
                            </div>
                        </Slide>
                        <Slide
                            direction="up"
                            in={true}
                            timeout={1000}
                            style={{ transitionDelay: 1000 }}
                        >
                            <div>
                                <EducationCard />
                            </div>
                        </Slide>
                        <Slide
                            direction="up"
                            in={true}
                            timeout={1000}
                            style={{ transitionDelay: 1250 }}
                        >
                            <div>
                                <ReferenceCard />
                            </div>
                        </Slide>
                    </div>
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
        </ReactLink>
    )
}

export default Resume
