import { Link } from "react-router-dom"
import { navlink, logo } from "../data/data"
import { useState } from "react"
import { Menu } from "@mui/icons-material"

export const Header = () => {
    const [responsive, setResponsive] = useState(false)

    return (
        <>
            <header>
                <div className="headerContainer flexheader">
                    <div className="logo">
                        <img
                            src={logo}
                            style={{
                                width: 53,
                                height: 53,
                            }}
                            alt="logo"
                        />
                    </div>

                    <div className={responsive ? "hideMenu" : "nav"}>
                        {navlink.map((links, i) => {
                            return (
                                <Link to={links.url} key={i}>
                                    {links.text}
                                </Link>
                            )
                        })}
                    </div>
                    <button
                        className="toggle"
                        onClick={() => {
                            setResponsive(!responsive)
                        }}
                    >
                        <Menu className="icon"></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}
