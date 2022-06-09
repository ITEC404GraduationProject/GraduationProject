import "./DropdownAuthorized.scss"
import userIcon from "../../../assets/icons/user.png"
import arrowIcon from "../../../assets/icons/arrow.png"

import { FiSettings } from "react-icons/all";
import {FiLogOut} from "react-icons/all";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/auth.context";
import {Link} from "react-router-dom";

const DropdownAuthorized = () => {

    const auth = useContext(AuthContext)

    const [userData, setUserData] = useState(null)

    const onLogout = () => {
        auth.logout()
    }

    useEffect(() => {
        const user = auth.user
        setUserData(user)
    }, [auth])

    return (
        <>
            <div className="header-account__user-card">
                <div className="user-card__top">
                    <div className="user-card__info">
                        <img src={userIcon} alt=""/>
                        <div>
                            <h4>{userData?.name} {userData?.surname}</h4>
                            <p>{userData?.email}</p>
                            <p className="link-like">{userData?.contact && userData.contact}</p>
                        </div>
                    </div>
                    {/*<div className="user-card__arrow">*/}
                    {/*    <img src={arrowIcon} alt=""/>*/}
                    {/*</div>*/}
                </div>
                <hr className="sep-line__hor" />
                <div className="user-card__bottom">
                    <div>
                        {
                            userData?.accountType === "AGENT" &&
                            <Link to={"/create"}><div>Create Offer</div></Link>
                        }
                    </div>
                </div>
            </div>
            <div className="header-account__content-links">
                <div className="header-account__content-link">
                    <FiLogOut />
                    <div onClick={onLogout}>Log Out</div>
                </div>
            </div>
        </>
    )
}

export default DropdownAuthorized