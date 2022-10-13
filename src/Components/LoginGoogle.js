import React, { useEffect, useRef } from "react";
import * as jose from 'jose'
import { useUserLoginMutation } from "../Features/usersAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from '../Features/usersSlice';
import { setMessage } from "../Features/AlertsSlice";

export default function LoginGoogle() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const btnGoogle = useRef(null)
    const [userLogin] = useUserLoginMutation()
    
    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let newData = {
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        
        await userLogin(newData)
        .then(response => {
            let data = response?.data?.response.user
            dispatch(setCredentials(response?.data?.response.user))
            localStorage.setItem('token', response?.data?.response.token)
            dispatch(setMessage({
                message: `Bienvenidx ${data?.firstName}`,
                success: true
            }))
            navigate("/", {replace:true})
        })
        .catch(error => {
            console.log(error)
        })     
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '1010010669908-i8rmjfkul9gkn8vptdok5k5p2u0not4k.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signin'
        });
        google.accounts.id.renderButton(
            btnGoogle.current,
            { theme: "outline", size: "large" , text: 'signin_with', locale: 'es'} // customization attributes
        );
    }, [])

    return (
        <div>
            <div ref={btnGoogle}></div>
        </div>
    )
}