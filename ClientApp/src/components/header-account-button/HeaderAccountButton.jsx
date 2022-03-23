import "./HeaderAccountButton.scss"
import showAccountDropdown from "../../style/scripts/showAccountDropdown";
import userIcon from "../../assets/icons/user.png";

const HeaderAccountButton = ({bodyRef, dropdownRef}) => {

    return (
        <div className="header-account__body-header" ref={bodyRef}
             onClick={() => showAccountDropdown(bodyRef, dropdownRef)}>
            <img className="header-account__img" src={userIcon} />
        </div>
    )
}

export default HeaderAccountButton