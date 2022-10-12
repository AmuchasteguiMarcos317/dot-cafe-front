import React, { useRef } from 'react'
import '../Styles/NewLetter.css'
import { useAddNewSubscriberMutation } from '../Features/newLetterAPI'
import { useDispatch } from 'react-redux'
import { setMessage } from '../Features/AlertsSlice'

export default function NewLetter() {
    const [ addSubscriber ]   = useAddNewSubscriberMutation()
    const formData = useRef({})
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formNews = document.querySelector('.newLetterContainer')
        const newData = Object.fromEntries(new FormData(formData.current))
        formNews.reset()
        try {
            let res = await addSubscriber(newData)
            if(res.data.success){
                dispatch(setMessage({
                    message: "Se ha suscripto a nuestro boletín",
                    success: true
                }))
            }else {
                dispatch(setMessage({
                    message: "Ocurrió un error",
                    success: false
                }))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className='newLetterContainer' onSubmit={handleSubmit} ref={formData}>
            <div className='newLetterSubs'>
                <h4> <span>Suscribite</span></h4>
                <h4>A nuestro Boletín Informativo</h4>
            </div>
            <div className='newLetterContain'>
                <label className='newLetterLabel' type='text' name='name'>
                    <h5>Nombre y apellido</h5>
                </label>
                <input className='newLetterInput' type="text" name='name' placeholder='Nombre y apellido' required />
                <label className='newLetterLabel' htmlFor='email'><h5>Email</h5></label>
                <input className='newLetterInput' type="email" name='email' placeholder='Ingrese su email' required />
                <button className='newLetterBtn' type='submit' >SUSCRIBIRSE</button>
            </div>
        </form>
    )
}
