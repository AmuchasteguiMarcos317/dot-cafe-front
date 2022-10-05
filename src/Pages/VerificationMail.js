import React from 'react'
import { Link as LinkRouter} from 'react-router-dom'
import '../Styles/VerificationMail.css'

export default function VerificationMail() {

    return (
        <>
            <main>
                <div className='VerificationContainer'>
                    <h2>Verificaste correctamente tu cuenta!</h2>
                    <LinkRouter to="/">iniciá sesión</LinkRouter>
                </div>
            </main>
        </>
    )
}