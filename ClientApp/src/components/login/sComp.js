
import {useRef, useState} from "react";
import "./style.scss"
import Login from "./Login";
import {Register} from "./register";


const Test = () => {

    const [isLoginActive, setLoginActive] = useState(true)

    let rightSideRef = useRef()

    const onChangeSide = () => {
        if (isLoginActive) {
            rightSideRef.current.classList.remove("right");
            rightSideRef.current.classList.add("left");
        } else {
            rightSideRef.current.classList.remove("left");
            rightSideRef.current.classList.add("right");
        }
        setLoginActive(prevState => ({ isLoginActive: !prevState.isLoginActive }))
    }


    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    return (
        <div className="App">
            <div className="login">
                <div className="container">
                    {isLoginActive && (
                        <Login  />
                    )}
                    {!isLoginActive && (
                        <Register  />
                    )}
                </div>
                <RightSide
                    current={current}
                    currentActive={currentActive}
                    containerRef={rightSideRef}
                    onClick={onChangeSide}
                />
            </div>
        </div>
    );
}

const RightSide = props => {
    return (
        <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}>
            <div className="inner-container">
                <div className="text">{props.current}</div>
            </div>
        </div>
    );
};

export default Test;