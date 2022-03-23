import "./HeaderNavbar.scss"

const HeaderNavbar = () => {
    return (
        <div className="header-navbar">
            <nav className="header-navbar__body">
                <ul className="header-navbar__list">
                    <li><a href="#"><span className="header-navbar__link">HOME</span></a></li>
                    <li><a href="#"><span className="header-navbar__link">AGENTS</span></a></li>
                    <li><a href="#"><span className="header-navbar__link">FOR USERS</span></a></li>
                    <li><a href="#"><span className="header-navbar__link">ABOUT</span></a></li>
                    <li><a href="#"><span className="header-navbar__link">FAQ</span></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNavbar