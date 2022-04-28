import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import Grow from "@mui/material/Grow"
import Slide from "@mui/material/Slide"

const Hero = () => {
    return (
        <Box
            sx={{
                bgcolor: "transparent",
                pt: 7,
                pb: 7,
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    pl: 0,
                    pr: 0,
                }}
            >
                <Fade in={true} timeout={1500}>
                    <div>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Marcus Lewis
                        </Typography>
                    </div>
                </Fade>
                <Slide direction="up" in={true} timeout={1000}>
                    <div>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Welcome to my portfolio.
                        </Typography>
                    </div>
                </Slide>

                <Grow in={true} timeout={3000}>
                    <div>
                        <Stack
                            sx={{ pt: 3 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Projects</Button>
                            <Button variant="contained">Resume</Button>
                        </Stack>
                    </div>
                </Grow>
            </Container>
        </Box>
    )
}

export default Hero
