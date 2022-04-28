import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

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
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Marcus Lewis
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    Welcome to my portfolio.
                </Typography>
                <Stack
                    sx={{ pt: 3 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Projects</Button>
                    <Button variant="contained">Resume</Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default Hero
