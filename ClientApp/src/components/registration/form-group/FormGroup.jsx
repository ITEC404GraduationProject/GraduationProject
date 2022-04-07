import "./FormGroup.scss"

const FormGroup = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default FormGroup