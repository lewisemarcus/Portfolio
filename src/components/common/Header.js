import { Link } from "react-router-dom"
import { navlink, logo } from "../data/data"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Turn as Hamburger } from "hamburger-react"
export const Header = () => {
    const location = useLocation()
    const [responsive, setResponsive] = useState(false)
    const navHandler = () => {
        document.getElementById("navbar").classList.remove("hideMenu")
        document.getElementById("navbar").classList.add("nav")
        setResponsive(!responsive)
    }

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

                    <div
                        id="navbar"
                        className={responsive ? "hideMenu" : "nav"}
                    >
                        {navlink.map((links, i) => {
                            return (
                                <Link
                                    className={
                                        location.pathname.split("/")[1] ==
                                        links.link
                                            ? "activeLink"
                                            : "link"
                                    }
                                    to={links.url}
                                    key={i}
                                    onClick={navHandler}
                                >
                                    {links.text}
                                </Link>
                            )
                        })}
                    </div>
                    <button
                        className="toggle icon"
                        onClick={() => {
                            setResponsive(!responsive)
                        }}
                    >
                        <Hamburger toggled={responsive} />
                    </button>
                </div>
            </header>
        </>
    )
}
