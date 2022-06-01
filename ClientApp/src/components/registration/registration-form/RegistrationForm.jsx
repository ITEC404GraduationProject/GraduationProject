import "./RegistrationForm.scss";
import FormGroup from "../form-group/FormGroup";
import {useState} from "react";
import $api from "../../../http";
import {useHistory} from "react-router-dom";

const RegistrationForm = ({ accountType, setAccountType, onChangeSide }) => {

    const history = useHistory()

    const [formData, setFormData] = useState({
        email: "", password: "", confirmPassword: "", name: "", surname: "",
        studentNumber: "", phoneNumber: ""
    })

    const onChangeAccountType = (newAccountType) => {
        setAccountType(newAccountType)
        onChangeSide()
    }

    const onFormDataUpdate = (field, value) => {
        setFormData(prev => ({...prev, [field]: value}))
    }

    const onRegistration = async () => {
        await $api.post(`/${accountType}`, {...formData}, {withCredentials: true})
        history.push("/home")
    }



    return (
        <div className="registration-form__wrap">
            <h2>Registration</h2>
            <div className="registration-form__select-account">
                <div className={accountType === "student" ? "active" : undefined} onClick={() => onChangeAccountType("student")}>Student</div>
                <div className={accountType === "agent" ? "active" : undefined} onClick={() => onChangeAccountType("agent")}>Agent</div>
            </div>
            <form className="registration-form">
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"text"} name={"name"} label={"Name"} placeholder={"Name"} />
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"text"} name={"surname"} label={"Surname"} placeholder={"Surname"} />
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"text"} name={"email"} label={"Email"} placeholder={"Email"} />

                {
                    accountType === "student" ?
                    <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"text"} name={"studentNumber"} label={"Student Number"} placeholder={"Student Number"} /> :
                    <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"text"} name={"phoneNumber"} label={"Phone Number"} placeholder={"Phone Number"} />
                    // <FormGroup type={"file"} name={"identityDocument"} label={"Identity Document"} placeholder={"Identity Document"} />
                }

                <hr className="sep-line__hor"/>
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"password"} name={"password"} label={"Password"} placeholder={"Password"} />
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"password"} name={"confirmPassword"} label={"Confirm Password"} placeholder={"Confirm Password"} />
                <div className="form-btn">
                    <button type="button" onClick={onRegistration} className="btn">Registration</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
