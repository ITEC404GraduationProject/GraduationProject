import "./HeaderMenuButton.scss"
import {useRef} from "react";
import openMobileMenu from "../../style/scripts/openMobileMenu";

const HeaderMenuButton = ({ mobileMenuRef }) => {

    const linesRef = useRef()

    return (
        <div className="header-menu__button" onClick={() => openMobileMenu(linesRef, mobileMenuRef)}>
            <div className="header-menu__button-content" ref={linesRef}>
                <hr className="menu-line1" />
                <hr className="menu-line2" />
            </div>
        </div>
    )
}

export default HeaderMenuButton