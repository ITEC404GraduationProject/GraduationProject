import "./MobileMenu.scss"

const MobileMenu = ({ mobileMenuRef }) => {


    return (
        <nav className="mobile-menu" ref={mobileMenuRef}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Agents</a>
                </li>
                <li>
                    <a href="#">For users</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#"><h3>My Account</h3></a>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu