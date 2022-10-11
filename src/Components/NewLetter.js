import React, { useRef } from 'react'
import '../Styles/NewLetter.css'
import { useAddNewSubscriberMutation } from '../Features/newLetterAPI'

export default function NewLetter() {
    const [ addSubscriber ]   = useAddNewSubscriberMutation()
    const formData = useRef({})
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formNews = document.querySelector('.newLetterContainer')
        const newData = Object.fromEntries(new FormData(formData.current))
        console.log(newData)
        await addSubscriber(newData)
        formNews.reset()
    }

    return (
        <form className='newLetterContainer' onSubmit={handleSubmit} ref={formData}>
            <div>
                <h4> <span>Suscríbete</span></h4>
                <h4>A nuestro Boletín Informativo</h4>
            </div>
            <div className='newLetterContain'>
                <label className='newLetterLabel' type='text' name='name'>
                    <h5>Nombre y apellido</h5>
                </label>
                <input className='newLetterInput' type="text" name='name' placeholder='Nombre y apellido' required />
                <label className='newLetterLabel' htmlFor='email'><h5>Email</h5></label>
                <input className='newLetterInput' type="email" name='email' placeholder='Ingrese su email' required />
                <button className='newLetterBtn' type='submit' >Suscríbete</button>
            </div>
        </form>
    )
}
