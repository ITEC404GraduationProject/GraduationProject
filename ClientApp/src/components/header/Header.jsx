import "./Header.scss"

import {useWindowSize} from "../../hooks/useWindowSize";
import {useRef} from "react";

import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderNavbar from "./header-navbar/HeaderNavbar";
import HeaderAccount from "./header-account/HeaderAccount";
import HeaderMenuButton from "./header-menu-button/HeaderMenuButton";
import MobileMenu from "./mobile-menu/MobileMenu";

const Header = () => {
    const windowSize = useWindowSize()
    const mobileMenuRef = useRef()

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <HeaderLogo windowWidth={windowSize.windowWidth} />
                    { (windowSize.windowWidth >= 1024 && (
                        <>
                            <HeaderNavbar />
                            <HeaderAccount />
                        </>
                    )) || (windowSize.windowWidth < 1024 && (
                        <HeaderMenuButton mobileMenuRef={mobileMenuRef} />
                    ))}
                </div>
                { windowSize.windowWidth < 1024 &&
                    <MobileMenu mobileMenuRef={mobileMenuRef} />
                }
            </div>
        </header>
    )
}

export default Header