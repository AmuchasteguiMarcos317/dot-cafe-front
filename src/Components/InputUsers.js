import '../Styles/InputUsers.css'

export default function InputUsers(props) {
        const inputs = props.inputObj
        const values = props.values

    return (
        <>
            <label key={inputs._id} className="formLabel"><h3 className='titleInput'>{inputs.label}</h3>
                <input className="formInput" type={inputs.type} name={inputs.name} defaultValue={values? values: ""} placeholder={inputs.ph} required />
            </label>
        </>
    );
}
