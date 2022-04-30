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

const cardStyle = {
    position: "relative",
    zIndex: "0 !important",
}

const Resume = () => {
    return (
        <Container>
            <ParticleEffect />
            <div style={cardStyle}>
                <HeaderCard />
                <SummaryCard />
                <SkillsCard />
                <WorkExpCard />
                <ReferenceCard />
            </div>
        </Container>
    )
}

export default Resume
