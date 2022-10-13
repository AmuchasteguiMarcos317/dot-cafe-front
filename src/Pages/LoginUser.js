import React, { useRef } from 'react'
import '../Styles/LoginUser.css'
import { useUserLoginMutation } from '../Features/usersAPI'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../Features/usersSlice'
import { reload } from '../Features/reloadSlice'
import { useNavigate } from 'react-router-dom'
import LoginGoogle from '../Components/LoginGoogle'
import { setMessage } from '../Features/AlertsSlice'

function LoginUser() {

    const fromData = useRef()
    const [loginUser] = useUserLoginMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const dataform = new FormData(fromData.current)
        const values = Object.fromEntries(dataform)
        if(values.email !== '' || values.password !== ''){
            values.from = 'form'
            login(values)
        }else {
            dispatch(setMessage({
                message: "Ingrese los datos",
                success: false
            }))
        }
    }

    async function login(logindata) {
        try {
            let res = await loginUser(logindata)
            if(res.data?.success){
                let data = res.data.response.user
                dispatch(setCredentials(data))
                dispatch(setMessage({
                    message: `Bienvenidx ${data.firstName} ${data.lastName}`,
                    success: res.data?.success
                }))
                dispatch(reload())
                localStorage.setItem('token', res.data.response.token)
                navigate("/", {replace: true})
            }else if(!res.error.success){
                dispatch(setMessage({
                    message: res.error.data.message,
                    success: res.error.data.success
                }))
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='formLoginUser'>
        <form ref={fromData} onSubmit={handleSubmit}>
        <h1 className='tittleLogin'>INICIAR SESIÓN</h1>
            <div>
                <label className='labelEmail' for='email'>Email</label>
                <input id='email' className='inputEmail' type="email" name='email' placeholder='Ingrese su email' required/>
            </div>
            <div>
                <label className='labelPass' for='pass'>Contraseña</label>
                <input id='pass' className='inputPass' type="password" name='password' placeholder='Ingrese su contraseña' required/>
            </div>
            <button className="formBoton" type='submit'>Iniciar Sesion</button>
            <LoginGoogle />
        </form>
    </div>
  )
}

export default LoginUser