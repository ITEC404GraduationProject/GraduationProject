import "./DropdownAuthorized.scss"
import userIcon from "../../../assets/icons/user.png"
import arrowIcon from "../../../assets/icons/arrow.png"

import { FiSettings } from "react-icons/all";
import {FiLogOut} from "react-icons/all";
import {useContext} from "react";
import {AuthContext} from "../../../context/auth.context";

const DropdownAuthorized = () => {

    const auth = useContext(AuthContext)

    const onLogout = () => {
        auth.logout()
    }

    return (
        <>
            <div className="header-account__user-card">
                <div className="user-card__top">
                    <div className="user-card__info">
                        <img src={userIcon} alt=""/>
                        <div>
                            <h4>Egor Arkhipov Dfjbskdhfbsdf</h4>
                            <p>+ 7 *** *** ** 36</p>
                            <p className="link-like">Manage Account</p>
                        </div>
                    </div>
                    <div className="user-card__arrow">
                        <img src={arrowIcon} alt=""/>
                    </div>
                </div>
                <hr className="sep-line__hor" />
                <div className="user-card__bottom">
                    <div/>
                    <hr className="sep-line__vert" />
                    <div/>
                </div>
            </div>
            <div className="header-account__content-links">
                <div className="header-account__content-link">
                    <FiSettings />
                    <div>Settings</div>
                </div>
                <div className="header-account__content-link">
                    <FiLogOut />
                    <div onClick={onLogout}>Log Out</div>
                </div>
            </div>
        </>
    )
}

export default DropdownAuthorized