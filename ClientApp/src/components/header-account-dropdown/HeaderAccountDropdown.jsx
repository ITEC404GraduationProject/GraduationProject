import "./HeaderAccountDropdown.scss"
import DropdownAuthorized from "../dropdown-authorized/DropdownAuthorized";
import DropdownLogin from "../dropdown-login/DropdownLogin";

const HeaderAccountDropdown = ({ dropdownRef }) => {

    const isAuthorized = true

    return (
        <div className="header-account__dropdown" ref={dropdownRef}>
            <div className="header-account__content-wrap">
                { isAuthorized ? <DropdownAuthorized /> : <DropdownLogin />}
            </div>
        </div>
    )
}

export default HeaderAccountDropdown