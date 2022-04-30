import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import References from "./Reference"
const ReferenceCard = () => {
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
                                <div>References</div>
                            </Typography>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                }}
                            >
                                {References.map((reference) => {
                                    return (
                                        <div
                                            style={{
                                                width: "48%",
                                                marginRight: "10px",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                {reference.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    mr: 0.5,
                                                    width: "80%",
                                                }}
                                                color="text.secondary"
                                            >
                                                {reference.company}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    mr: 0.5,
                                                    width: "80%",
                                                }}
                                                color="text.secondary"
                                            >
                                                {reference.email}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                }}
                                                color="text.secondary"
                                            >
                                                {reference.address}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mb: 1.5,
                                                    mr: 0.5,
                                                    width: "80%",
                                                }}
                                                color="text.secondary"
                                            >
                                                {reference.phone}
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

export default ReferenceCard
