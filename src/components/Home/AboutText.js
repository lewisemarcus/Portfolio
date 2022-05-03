import * as React from "react"
import Container from "@mui/material/Container"
import Zoom from "@mui/material/Zoom"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import { Typography } from "@mui/material"

const AboutText = () => {
    return (
        <Box>
            <Container>
                <Zoom
                    in={true}
                    timeout={1000}
                    style={{ transitionDelay: "750ms" }}
                >
                    <div>
                        <div
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <Avatar
                                alt="Marcus Lewis"
                                src="/static/images/avatar/ProfilePic.jpg"
                                sx={{ width: 110, height: 110 }}
                            />
                        </div>

                        <Typography
                            paragraph={true}
                            sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "text.secondary",
                                p: 1,
                                pb: 10,
                                borderRadius: 10,
                            }}
                        >
                            I am a Full Stack Web Developer with a background in
                            Content Analysis, denoted by my certificate in
                            Full-Stack Development from UCI's Full-Stack
                            Program. I am gifted in evaluating risk and loss
                            potential and developing information for new and
                            renewal policies. I am team-oriented with success in
                            creating case studies and content validation. I try
                            to be at the forefront of all projects I work on to
                            make sure I get the experience and understand the
                            entirety of the project, exemplified by my roles in
                            projects and tasks I've undertaken. For each
                            project, my goal was to immerse myself with the most
                            "difficult" aspects of them, such as back-end
                            development and integration. I am highly motivated
                            and eager to grow my career as a Developer. I have a
                            desire for industry knowledge and trends to
                            implement further in my career.
                        </Typography>
                    </div>
                </Zoom>
            </Container>
        </Box>
    )
}

export default AboutText
