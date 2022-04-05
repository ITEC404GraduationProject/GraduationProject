import "./HeaderAccountButton.scss"
import userIcon from "../../../assets/icons/user.png";

const HeaderAccountButton = ({buttonRef, onOpenDropdown}) => {

    return (
        <div className="header-account__button-content" ref={buttonRef} onClick={onOpenDropdown}>
            <img className="header-account__img" src={userIcon} />
        </div>
    )
}

export default HeaderAccountButton