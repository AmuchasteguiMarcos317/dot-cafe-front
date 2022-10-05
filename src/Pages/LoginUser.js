import React, { useRef } from 'react'
import '../Styles/LoginUser.css'
import { useUserLoginMutation } from '../Features/usersAPI'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../Features/usersSlice'
import { reload } from '../Features/reloadSlice'

function LoginUser() {

    const fromData = useRef()
    const [loginUser] = useUserLoginMutation()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const dataform = new FormData(fromData.current)
        const values = Object.fromEntries(dataform)
        if(values.email !== '' || values.password !== ''){
            values.from = 'form'
            login(values)
        }else {
            console.log('Esta vacio')
        }
    }

    async function login(logindata) {
        try {
            let res = await loginUser(logindata)
            if(res.data.success){
                let data = res.data.response.user
                dispatch(setCredentials(data))
                dispatch(reload())
                localStorage.setItem('token', res.data.response.token)
                console.log('Login...')
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='form-login-user'>
        <form ref={fromData} onSubmit={handleSubmit}>
        <h1 className='tittleLogin'>Login User</h1>
            <div>
                <label htmlFor='email' id='email'>Email</label>
                <input id='email' className='inputEmail' type="email" name='email' placeholder='Ingrese su email'/>
            </div>
            <div>
                <label id='pass'>Contraseña</label>
                <input id='pass' className='inputPass' type="password" name='password' placeholder='password'/>
            </div>
            <button className="formBoton" type='submit'>Iniciar Sesion</button>
        </form>
    </div>
  )
}

export default LoginUser