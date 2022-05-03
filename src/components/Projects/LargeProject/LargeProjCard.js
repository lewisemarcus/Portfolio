import * as React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import { BugZapper } from "../ProjectList"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import "./LargeProjCard.css"
import Slide from "@mui/material/Slide"

const LargeCard = () => {
    React.useEffect(() => {
        setTimeout(function () {
            document.getElementById("bugZapper").classList.add("LargeCard")
        }, 1000)
    })
    return (
        <Slide direction="up" in={true} timeout={1000} unmountOnExit>
            <Card id="bugZapper" sx={{ mb: 3, maxWidth: 800 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={BugZapper.image}
                    alt="Bug Tracker"
                    style={{ objectFit: "scale-down" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {BugZapper.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {BugZapper.body}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ pt: 3 }}
                    >
                        Technologies Used: {BugZapper.tech}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ pt: 3 }}
                    >
                        Role: {BugZapper.role}
                    </Typography>
                </CardContent>
                <CardActions sx={{ flexWrap: "wrap" }}>
                    <Button size="small" sx={{ pl: 1 }}>
                        <a
                            href={BugZapper.github}
                            style={{
                                textDecoration: "none",
                                color: "rgb(25, 118, 210)",
                            }}
                        >
                            Github Link
                        </a>
                    </Button>
                    <Button size="small" sx={{ pl: 0, ml: 0 }}>
                        <a
                            href={BugZapper.deployed}
                            style={{
                                textDecoration: "none",
                                color: "rgb(25, 118, 210)",
                            }}
                        >
                            Deployed Application
                        </a>
                    </Button>
                    <Button size="small" sx={{ pl: 0, ml: 0 }}>
                        <a
                            href={BugZapper.contributions}
                            style={{
                                textDecoration: "none",
                                color: "rgb(25, 118, 210)",
                            }}
                        >
                            Contributions
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </Slide>
    )
}

export default LargeCard
