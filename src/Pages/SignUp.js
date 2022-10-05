import React from 'react'
import InputUsers from "../Components/InputUsers";
import '../Styles/SignUp.css'

const inputsArray = [
    { _id: 100, name: "Nombre", type: "text", ph: "e.g. Maria" },
    { _id: 101, name: "Apellido", type: "text", ph: "e.g Phillips" },
    

]
const inputsArray2 = [
    { _id: 102, name: "Foto", type: "text", ph: "debe ser una url" },
    { _id: 103, name: "Email", type: "email", ph: "mariaphillips@gmail.com" },
    { _id: 104, name: "Contraseña", type: "password", ph: "debe contener letras o números" },
    { _id: 105, name: "Telefono", type: "number", ph: "3548504773" },
    { _id: 106, name: "Direccion", type: "text", ph: "Pueyrredon 536" },
    { _id: 107, name: "Codigo Postal", type: "text", ph: "5000" },
    { _id: 108, name: "Ciudad", type: "text", ph: "Cordoba" },
]
export default function SignUp() {
    return (
        <>
            <main className='signUpContainer'>
                <form className='formSignUp'>
                    <div>
                        <h2>REGISTRARSE</h2>
                    </div>
                    <div className='formContainer'>
                        <div className='inputContainer1'>
                            {inputsArray.map(inputObj => <InputUsers inputObj={inputObj} values={""} />)}
                        </div>
                        <div className='inputContainer2'>
                            {inputsArray2.map(inputObj => <InputUsers inputObj={inputObj} values={""} />)}
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <button className="formBtn" type="submit">REGISTRAR</button>
                        {/* { role === "admin" ?
                            <select className="selectRole" ref={selectRole} required>
                            <option value="user" key="user123">User</option>
                            <option value="admin" key="admin123">Admin</option>
                            
                            </select>
                            :
                            <SignUpGoogle />
                        } */}

                    </div>
                </form>
                <div>
                </div>
            </main>
        </>
    )
}
