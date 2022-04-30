import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Skills from "./Skills"
import "./SkillsCard.css"

const SkillsCard = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <div>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                <div className={"title"}>Skills</div>
                            </Typography>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                {Skills.map((skillList, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                paddingLeft: "5%",
                                                paddingRight: "5%",
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                <div>{skillList.title}</div>
                                            </Typography>
                                            <Typography variant="body2">
                                                <div>
                                                    <ul>
                                                        {skillList.skills.map(
                                                            (skill, index) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        {skill}
                                                                    </li>
                                                                )
                                                            },
                                                        )}
                                                    </ul>
                                                </div>
                                                <br />
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

export default SkillsCard
