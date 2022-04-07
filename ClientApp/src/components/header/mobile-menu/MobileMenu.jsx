import "./MobileMenu.scss"
import {Link} from "react-router-dom";

const MobileMenu = ({ mobileMenuRef }) => {
    return (
        <nav className="mobile-menu" ref={mobileMenuRef}>
            <ul>
                <li>
                    <Link to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/agents"}>Agents</Link>
                </li>
                <li>
                    <Link to={"/forusers"}>For users</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/faq"}>FAQ</Link>
                </li>
                <li>
                    <Link to={"/account"}><h3>My Account</h3></Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu