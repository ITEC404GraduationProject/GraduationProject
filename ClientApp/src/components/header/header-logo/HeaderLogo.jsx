import "./HeaderLogo.scss"
import logo from "../../../assets/logo/Logo.PNG"

const HeaderLogo = ({ windowWidth }) => {

    return (
        <div className="header__logo">
            <img src={logo} alt=""/>
            { windowWidth > 350 && <span>Cyprus Homes</span>}
        </div>
    )
}

export default HeaderLogo