import React, { useEffect, useRef } from "react";
import * as jose from 'jose'
import { useUserSignupMutation } from "../Features/usersAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "../Features/AlertsSlice";

export default function SignUpGoogle() {
    const navigate = useNavigate()
    const btnGoogle = useRef(null)
    const [addUser] = useUserSignupMutation();
    const dispatch = useDispatch()

    async function handleCredentialResponse(response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
            firstName: userObject.name.split(userObject.family_name)[0].trim(),
            lastName: userObject.family_name ? userObject.family_name : userObject.name,
            photo: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            role: 'user',
            from: 'google'
        }
        await addUser(data)
        .then(response => {
            navigate('/login', {replace:true})
            dispatch(setMessage({
                message: 'Registrado',
                success: true
            }))
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
            context: 'signup'
        });
        google.accounts.id.renderButton(
            btnGoogle.current,
            { theme: "outline", size: "large" , text: 'signup_with', locale: 'es'} // customization attributes
        );
    }, [])
    
    return (
        <div>
            <div ref={btnGoogle}></div>
        </div>
    )
}