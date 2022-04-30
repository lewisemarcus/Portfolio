import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Education from "./Education"
const EducationCard = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <div>
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="div"
                                className={"title"}
                            >
                                <div>Education</div>
                            </Typography>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                {Education.map((grad, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                {grad.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    mr: 0.5,
                                                }}
                                                color="text.secondary"
                                            >
                                                {grad.school}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    mr: 0.5,
                                                }}
                                                color="text.secondary"
                                            >
                                                {grad.date}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                }}
                                                color="text.secondary"
                                            >
                                                {grad.location}
                                            </Typography>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </div>
                </React.Fragment>
            </Card>
        </Box>
    )
}

export default EducationCard
