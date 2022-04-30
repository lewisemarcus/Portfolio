import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import Paper from "@mui/material/Paper"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grow from "@mui/material/Grow"
import { ProjectList } from "../ProjectList"

const ProjectCards = () => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: 700,
                justifyContent: "space-evenly",
            }}
        >
            {ProjectList.map((project, index) => {
                return (
                    <div key={index}>
                        <Grow
                            in={true}
                            timeout={2000}
                            style={{
                                transitionDelay: project.delay,
                            }}
                        >
                            <Card sx={{ maxWidth: 300, mb: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt="green iguana"
                                    style={{ objectFit: "fill" }}
                                />
                                <CardContent sx={{ p: 0, pr: 2, pl: 2 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {project.body}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ pt: 0 }}>
                                    <Button size="small">
                                        <a href={project.github}>Github Link</a>
                                    </Button>
                                    <Button size="small">
                                        <a href={project.deployed}>
                                            Deployed Application
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grow>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCards
