import * as React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import { BugZapper } from "../ProjectList"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Fade from "@mui/material/Fade"

const LargeCard = () => {
    return (
        <Fade in={true} timeout={2000}>
            <Card sx={{ maxWidth: 800, mb: 3 }}>
                <CardMedia
                    component="img"
                    height="448"
                    image={BugZapper.image}
                    alt="Bug Tracker"
                    style={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {BugZapper.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {BugZapper.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href={BugZapper.github}>Github Link</a>
                    </Button>
                    <Button size="small">
                        <a href={BugZapper.deployed}>Deployed Application</a>
                    </Button>
                </CardActions>
            </Card>
        </Fade>
    )
}

export default LargeCard
