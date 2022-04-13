import "./HeaderAccountDropdown.scss"
import DropdownAuthorized from "../dropdown-authorized/DropdownAuthorized";
import DropdownLogin from "../dropdown-login/DropdownLogin";
import {useContext} from "react";
import {AuthContext} from "../../../context/auth.context";

const HeaderAccountDropdown = ({ dropdownRef }) => {

    const auth = useContext(AuthContext)

    return (
        <div className="header-account__dropdown" ref={dropdownRef}>
            <div className="header-account__content-wrap">
                { auth.isAuthenticated ? <DropdownAuthorized /> : <DropdownLogin />}
            </div>
        </div>
    )
}

export default HeaderAccountDropdown