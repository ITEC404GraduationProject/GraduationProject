import "./DropdownLogin.scss"

import {AiOutlineMail} from "react-icons/all";
import {AiOutlineLock} from "react-icons/all";


import {useState} from "react";

const DropdownLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }


    return (
        <form className="login__form">
            <div className="login__input">
                <input type={"text"} onChange={e => emailChangeHandler(e)} />
                <div className="login__input-line"></div>
                <div className="input-placeholder">
                    <AiOutlineMail className="icon" />
                    <div className={ email && "input-placeholder__moved" }>
                        E-Mail
                    </div>
                </div>
            </div>
            <div className="login__input">
                <input type={"password"} onChange={e => passwordChangeHandler(e)} />
                <div className="login__input-line"></div>
                <div className="input-placeholder">
                    <AiOutlineLock className="icon" />
                    <div className={ password && "input-placeholder__moved" }>
                        Password
                    </div>
                </div>
            </div>
            <button className="login-button" type="button">Login</button>
            <p>
                <a href="#">Forgot password?</a>
            </p>
            <hr className="sep-line__hor"/>
            <p>
                Don't have an account? <a>Sign up!</a>
            </p>
            <p className="error-block">
                Wrong email or password. Try again.
            </p>
        </form>
    )
}

export default DropdownLogin