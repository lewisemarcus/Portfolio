import * as React from "react"
import Container from "@mui/material/Container"
import {
    WorkExpCard,
    SkillsCard,
    SummaryCard,
    HeaderCard,
    ReferenceCard,
} from "./index"
import ParticleEffect from "./Particles"
import Slide from "@mui/material/Slide"

const cardStyle = {
    position: "relative",
    zIndex: "0 !important",
}

const Resume = () => {
    return (
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
                        <ReferenceCard />
                    </div>
                </Slide>
            </div>
        </Container>
    )
}

export default Resume
