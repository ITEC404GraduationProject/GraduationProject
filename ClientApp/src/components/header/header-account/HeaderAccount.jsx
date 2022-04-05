import "./HeaderAccount.scss"
import {useRef} from "react";
import HeaderAccountButton from "../header-account-button/HeaderAccountButton";
import HeaderAccountDropdown from "../header-account-dropdown/HeaderAccountDropdown";
import showAccountDropdown from "../../../style/scripts/showAccountDropdown";

const HeaderAccount = () => {

    const dropdownRef = useRef()
    const buttonRef = useRef()

    const onOpenDropdown = () => {
        showAccountDropdown(buttonRef, dropdownRef)
    }

    return (
        <div className="header-account__button">
            <HeaderAccountButton buttonRef={buttonRef} onOpenDropdown={onOpenDropdown} />
            <HeaderAccountDropdown dropdownRef={dropdownRef} />
        </div>
    )
}

export default HeaderAccount