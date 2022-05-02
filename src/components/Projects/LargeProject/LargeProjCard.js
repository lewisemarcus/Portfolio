import * as React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import { BugZapper } from "../ProjectList"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import "./LargeProjCard.css"
import Fade from "@mui/material/Fade"

const LargeCard = () => {
    return (
        <Fade in={true} timeout={2000}>
            <Card sx={{ mb: 3 }} className={"LargeCard"}>
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
                            style={{ textDecoration: "none" }}
                        >
                            Github Link
                        </a>
                    </Button>
                    <Button size="small" sx={{ pl: 0, ml: 0 }}>
                        <a
                            href={BugZapper.deployed}
                            style={{ textDecoration: "none" }}
                        >
                            Deployed Application
                        </a>
                    </Button>
                    <Button size="small" sx={{ pl: 0, ml: 0 }}>
                        <a
                            href={BugZapper.contributions}
                            style={{ textDecoration: "none" }}
                        >
                            Contributions
                        </a>
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    )
}

export default LargeCard
