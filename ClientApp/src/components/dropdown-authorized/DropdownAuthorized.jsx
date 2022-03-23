import "./DropdownAuthorized.scss"
import userIcon from "../../assets/icons/user.png"
import arrowIcon from "../../assets/icons/arrow.png"

import { FiSettings } from "react-icons/all";
import {FiLogOut} from "react-icons/all";

const DropdownAuthorized = () => {
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
                    <div></div>
                    <hr className="sep-line__vert" />
                    <div></div>
                </div>
            </div>
            <div className="header-account__content-links">
                <div className="header-account__content-link">
                    <FiSettings className="icon"/>
                    <div>Settings</div>
                </div>
                <div className="header-account__content-link">
                    <FiLogOut className="icon"/>
                    <div>Log Out</div>
                </div>
            </div>
        </>
    )
}

export default DropdownAuthorized