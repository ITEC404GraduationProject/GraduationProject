import "./Header.scss"

import {useWindowSize} from "../../hooks/useWindowSize";
import {useContext, useRef, useState} from "react";

import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderNavbar from "./header-navbar/HeaderNavbar";
import HeaderAccount from "./header-account/HeaderAccount";
import HeaderMenuButton from "./header-menu-button/HeaderMenuButton";
import MobileMenu from "./mobile-menu/MobileMenu";
import {AuthContext} from "../../context/auth.context";
import $api from "../../http";


const Header = () => {
    const windowSize = useWindowSize()
    const mobileMenuRef = useRef()

    const auth = useContext(AuthContext)

    const [testData, setTestData] = useState(null)
    // console.log(auth)

    const onLogin = async () => {
        const response = await $api.post('/student/login', {Email: "ktp332@yandex.ru", Password: "123456ss"}, {withCredentials: true})
        setTestData(response)
    }

    const test = () => {
        console.log(testData)
    }

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
                <button onClick={onLogin}>DFsdf</button>
                <button onClick={test}>DFsdf</button>
            </div>
        </header>
    )
}

export default Header