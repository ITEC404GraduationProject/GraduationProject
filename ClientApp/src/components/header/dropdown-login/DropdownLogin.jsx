import "./DropdownLogin.scss"

import {FiMail} from "react-icons/all";
import {FiLock} from "react-icons/all";


import {useState} from "react";

const DropdownLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [accountType, setAccountType] = useState("student")

    return (
        <form className="login__form">
            <div className="login-form__wrap">
                <div className="login-form__header">
                    <div className={accountType === "student" && "active"} onClick={() => setAccountType("student")}>Student</div>
                    {/*<hr className="sep-line__vert"/>*/}
                    <div className={accountType === "agent" && "active"} onClick={() => setAccountType("agent")}>Agent</div>
                </div>
                <div className="login-form__input-group">
                    <div className="login__input-wrap">
                        <input type={"text"} value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="login__input-line"/>
                        <div className="input-placeholder">
                            <FiMail />
                            <div className={ email && "input-placeholder__moved" }>
                                E-Mail
                            </div>
                        </div>
                    </div>
                    <div className="login__input-wrap">
                        <input type={"password"} value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="login__input-line"/>
                        <div className="input-placeholder">
                            <FiLock />
                            <div className={ password && "input-placeholder__moved" }>
                                Password
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login-form__button-wrap">
                    <button type={"button"}>Sign In</button>
                </div>
                <hr className="sep-line__hor"/>
                <div className="login-form__help-buttons">
                    <button type={"button"}>Forgot password?</button>
                    <button type={"button"}>Not a user? Sign up</button>
                </div>
            </div>
            <div className="login-form__error-display">

            </div>
        </form>
    )
}

export default DropdownLogin