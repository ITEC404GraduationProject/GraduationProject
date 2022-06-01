import "./Registration.scss"
import {useRef, useState} from "react";
import MovingBackground from "./moving-background/MovingBackground";
import RegistrationForm from "./registration-form/RegistrationForm";


const Registration = () => {

    const [accountType, setAccountType] = useState("student")

    let rightSideRef = useRef()

    const onChangeSide = () => {
        if (accountType === "student") {
            rightSideRef.current.classList.remove("right");
            rightSideRef.current.classList.add("left");
        } else {
            rightSideRef.current.classList.remove("left");
            rightSideRef.current.classList.add("right");
        }
        setAccountType(() => {
            if (accountType === "student") {
                return "agent"
            } else {
                return "student"
            }
        })
    }

    const current = accountType === "student" ? "Student" : "Agent";

    return (
        <div className="registration-wrap">
            <div className="registration">
                <div className="registration-content">
                    <RegistrationForm
                        accountType={accountType}
                        setAccountType={setAccountType}
                        onChangeSide={onChangeSide} />
                </div>
                <MovingBackground
                    current={current}
                    containerRef={rightSideRef}
                    onClick={onChangeSide}
                />
            </div>
        </div>
    )
}

export default Registration;