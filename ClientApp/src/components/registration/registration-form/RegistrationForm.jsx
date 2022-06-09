import "./RegistrationForm.scss";
import FormGroup from "../form-group/FormGroup";
import {useState} from "react";
import $api from "../../../http";
import {useHistory} from "react-router-dom";

const RegistrationForm = ({ accountType, setAccountType, onChangeSide }) => {

    const history = useHistory()

    const [errorMsg, setErrorMsg] = useState("")

    const [formData, setFormData] = useState({
        email: "", password: "", confirmPassword: "", name: "", surname: "",
        studentNumber: "", contact: ""
    })

    const onChangeAccountType = (newAccountType) => {
        setAccountType(newAccountType)
        onChangeSide()
    }

    const onFormDataUpdate = (field, value) => {
        setFormData(prev => ({...prev, [field]: value}))
    }

    const onRegistration = async () => {
        if (formData.email) {
            if (formData.password && formData.confirmPassword && formData.password === formData.confirmPassword) {
                if (formData.name && formData.surname) {
                    if (accountType === "student") {
                        if (formData.studentNumber) {
                            await test()
                        } else {
                            setErrorMsg("Enter student number")
                        }
                    }
                    if (accountType === "agent") {
                        if (formData.contact) {
                            await test()
                        } else {
                            setErrorMsg("Enter phone number")
                        }
                    }
                } else {
                    setErrorMsg("Enter name and surname")
                }
            } else {
                setErrorMsg("Enter password and confirm it")
            }
        } else {
            setErrorMsg("You have to enter email")
        }
    }

    const test = async () => {
        try {
            await $api.post(`/${accountType}`, {...formData}, {withCredentials: true})
            history.push("/home")
        } catch (e) {
            if (e.response.data.errors) {
                for (let i in e.response.data.errors) {
                    setErrorMsg(e.response.data.errors[i][0])
                }
            }
            else {
                setErrorMsg(e.response.data)
            }
        }
    }

    const goBack = () => {
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
                    <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"text"} name={"contact"} label={"Phone Number"} placeholder={"Phone Number"} />
                    // <FormGroup type={"file"} name={"identityDocument"} label={"Identity Document"} placeholder={"Identity Document"} />
                }

                <hr className="sep-line__hor"/>
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"password"} name={"password"} label={"Password"} placeholder={"Password"} />
                <FormGroup formData={formData} onFormDataUpdate={onFormDataUpdate} type={"password"} name={"confirmPassword"} label={"Confirm Password"} placeholder={"Confirm Password"} />
                <div className="form-btn">
                    <button type="button" onClick={onRegistration} className="btn">Registration</button>
                    <button type="button" onClick={goBack} className="btn">Go Back</button>
                </div>
                {
                    errorMsg &&
                    <div className="error_msg">
                        { errorMsg }
                    </div>
                }
            </form>
        </div>
    )
}

export default RegistrationForm
