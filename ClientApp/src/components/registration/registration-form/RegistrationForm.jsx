import "./RegistrationForm.scss";
import FormGroup from "../form-group/FormGroup";

const RegistrationForm = ({ accountType, setAccountType, onChangeSide }) => {

    const onChangeAccountType = (newAccountType) => {
        setAccountType(newAccountType)
        onChangeSide()
    }

    return (
        <div className="registration-form__wrap">
            <h2>Registration</h2>
            <div className="registration-form__select-account">
                <div className={accountType === "student" ? "active" : undefined} onClick={() => onChangeAccountType("student")}>Student</div>
                <div className={accountType === "agent" ? "active" : undefined} onClick={() => onChangeAccountType("agent")}>Agent</div>
            </div>
            <form className="registration-form">
                <FormGroup type={"text"} name={"name"} label={"Name"} placeholder={"Name"} />
                <FormGroup type={"text"} name={"surname"} label={"Surname"} placeholder={"Surname"} />

                {
                    accountType === "student" ?
                    <FormGroup type={"text"} name={"studentNumber"} label={"Student Number"} placeholder={"Student Number"} /> :
                    <FormGroup type={"file"} name={"identityDocument"} label={"Identity Document"} placeholder={"Identity Document"} />
                }

                <hr className="sep-line__hor"/>
                <FormGroup type={"password"} name={"password"} label={"Password"} placeholder={"Password"} />
                <FormGroup type={"password"} name={"confirmPassword"} label={"Confirm Password"} placeholder={"Confirm Password"} />
                <div className="form-btn">
                    <button type="button" className="btn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
