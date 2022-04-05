import "./HeaderNavbar.scss"
import {Link} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <nav className="header-navbar">
            <ul className="header-navbar__list">
                <li><Link to={"/home"}><span className="header-navbar__link-text">Home</span></Link></li>
                <li><Link to={"/agents"}><span className="header-navbar__link-text">Agents</span></Link></li>
                <li><Link to={"/forusers"}><span className="header-navbar__link-text">For Users</span></Link></li>
                <li><Link to={"/about"}><span className="header-navbar__link-text">About</span></Link></li>
                <li><Link to={"/faq"}><span className="header-navbar__link-text">F.A.Q</span></Link></li>
            </ul>
        </nav>
    )
}

export default HeaderNavbar