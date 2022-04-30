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
                            Hello, my name is Marcus, and welcome to my
                            Portfolio webpage, where you will find my most
                            recent and what I consider my best works in regard
                            to web development. My education consists of a
                            Bachelor's degree in English, received from the
                            University of California, Irvine, and I have
                            received a certificate noting my completion of the
                            Full Stack Coding Boot Camp, also from the
                            University of California, Irvine.
                        </Typography>
                    </div>
                </Zoom>
            </Container>
        </Box>
    )
}

export default AboutText
