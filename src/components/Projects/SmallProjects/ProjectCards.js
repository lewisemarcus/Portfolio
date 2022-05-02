import * as React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grow from "@mui/material/Grow"
import { ProjectList } from "../ProjectList"
import "./ProjectCards.css"

const ProjectCards = () => {
    const [width, setWidth] = React.useState(0)

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {ProjectList.map((project, index) => {
                return (
                    <div id={index} key={index}>
                        <Grow
                            in={true}
                            timeout={2000}
                            style={{
                                transitionDelay: project.delay,
                            }}
                        >
                            <Card
                                sx={{
                                    m: 3,
                                    maxWidth: 600,
                                }}
                                className={"MyCard"}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.image}
                                    alt={project.title}
                                    style={{ objectFit: "scale-down" }}
                                />
                                <CardContent sx={{ pr: 2, pl: 2, pt: 3 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        {project.body}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ pt: 3 }}
                                    >
                                        Technologies Used: {project.tech}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ pt: 3 }}
                                    >
                                        Role: {project.role}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ flexWrap: "wrap" }}>
                                    <Button size="small" sx={{ pl: 1 }}>
                                        <a
                                            href={project.github}
                                            style={{ textDecoration: "none" }}
                                        >
                                            Github Link
                                        </a>
                                    </Button>
                                    <Button size="small" sx={{ pl: 0, ml: 0 }}>
                                        <a
                                            href={project.deployed}
                                            style={{ textDecoration: "none" }}
                                        >
                                            Deployed Application
                                        </a>
                                    </Button>
                                    <Button size="small" sx={{ pl: 0, ml: 0 }}>
                                        <a
                                            href={project.contributions}
                                            style={{ textDecoration: "none" }}
                                        >
                                            Contributions
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
