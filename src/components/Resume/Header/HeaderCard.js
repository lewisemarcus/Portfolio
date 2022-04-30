import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import HomeIcon from "@mui/icons-material/Home"
import Header from "./Header"
const HeaderCard = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <div>
                        <CardContent>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Stack
                                    sx={{ pt: 3, mb: 2 }}
                                    direction="row"
                                    spacing={1}
                                >
                                    <Link color="inherit" href="/">
                                        <Button variant="contained">
                                            <HomeIcon />
                                        </Button>
                                    </Link>

                                    <Link
                                        color="inherit"
                                        href="/Projects"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <Button variant="contained">
                                            Projects
                                        </Button>
                                    </Link>
                                </Stack>

                                <Typography
                                    variant="h5"
                                    component="div"
                                    className={"title"}
                                    style={{
                                        marginBottom: "10px",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        fontSize: "45px",
                                    }}
                                >
                                    <div>{Header.name}</div>
                                </Typography>
                            </div>
                            <Typography
                                variant="body2"
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    fontSize: "16px",
                                }}
                            >
                                {Header.location}
                                {Header.phone}
                                {Header.email}
                            </Typography>
                        </CardContent>
                    </div>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default HeaderCard