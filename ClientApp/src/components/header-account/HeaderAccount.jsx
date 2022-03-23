import "./HeaderAccount.scss"
import {useRef} from "react";
import HeaderAccountButton from "../header-account-button/HeaderAccountButton";
import HeaderAccountDropdown from "../header-account-dropdown/HeaderAccountDropdown";

const HeaderAccount = () => {

    const dropdownRef = useRef()
    const bodyRef = useRef()


    return (
        <div className="header-account">
            <div className="header-account__body">
                <HeaderAccountButton bodyRef={bodyRef} dropdownRef={dropdownRef} />
                <HeaderAccountDropdown dropdownRef={dropdownRef} />
            </div>
        </div>
    )
}

export default HeaderAccount