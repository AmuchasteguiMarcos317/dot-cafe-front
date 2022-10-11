import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputUsers from "../Components/InputUsers";
import SignUpGoogle from '../Components/SignUpGoogle';
import { setMessage } from '../Features/AlertsSlice';
import { reload } from '../Features/reloadSlice';
import { useUserSignupMutation } from '../Features/usersAPI';
import '../Styles/SignUp.css'

const inputsArray = [
    { _id: 100, name: "firstName", type: "text", ph: "ej: Maria", label: "Nombre"},
    { _id: 101, name: "lastName", type: "text", ph: "ej: López", label: "Apellido" },
]
const inputsArray2 = [
    { _id: 102, name: "photo", type: "text", ph: "debe ser una url", label: "Foto"},
    { _id: 103, name: "email", type: "email", ph: "marialopez@gmail.com" , label: "Email"},
    { _id: 104, name: "password", type: "password", ph: "debe contener letras o números", label: "Contraseña" },
]
export default function SignUp() {

    const fromData = useRef()
    const [signUp] = useUserSignupMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const dataform = new FormData(fromData.current)
        const values = Object.fromEntries(dataform)
        values.from = 'form'
        values.role = 'user'
        singUpUser(values)
    }

    async function singUpUser(data) {
        try {
            let res = await signUp(data)
            if(res.data?.success){
                dispatch(reload())
                navigate("/login", {replace: true})
                dispatch(setMessage({
                    message: "Revisa tu correo para confirmar tu cuenta",
                    success: true
                }))
            }else if(!res.error.success){
                dispatch(setMessage({
                    message: res.error.data.message,
                    success: res.error.data.success
                }))
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <main className='signUpContainer'>
                <form className='formSignUp' onSubmit={handleSubmit} ref={fromData}>
                    <div>
                        <h2>REGISTRARSE</h2>
                    </div>
                    <div className='formContainer'>
                        <div className='inputContainer1'>
                            {inputsArray.map(inputObj => <InputUsers inputObj={inputObj} key={inputObj._id} />)}
                        </div>
                        <div className='inputContainer2'>
                            {inputsArray2.map(inputObj => <InputUsers inputObj={inputObj} key={inputObj._id} />)}
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <button className="formBtn" type="submit">REGISTRAR</button>
                    </div>
                    <SignUpGoogle />
                </form>
            </main>
        </>
    )
}

