import React from 'react'
import '../Styles/Contact.css'
export default function Contact() {
    return (
        <>
            <main className='contactContainer'>
                <form className='formContact'>
                    <div>
                        <h2 className='titleContact'>CONTACTO</h2>
                    </div>
                    <div className='formCont'>
                        <div className='inputContact'>
                            <label className="formLabelCont"><h3 className='titleInputContact'>Nombre</h3>
                                <input className="formInputContact" type='text' name='nombre' placeholder='Nombre' required />
                            </label>
                        </div>
                        <div className='inputContact1'>
                            <label className="formLabelCont"><h3 className='titleInputContact'>Email</h3>
                                <input className="formInputContact" type='email' name='email' placeholder='Email' required />
                            </label>
                        </div>
                        <div className='inputContact2'>
                            <label className="formLabelCont"><h3 className='titleInputContact'>Telefono</h3>
                                <input className="formInputContact" type='tel' name='telefono' placeholder='Telefono' required />
                            </label>
                        </div>
                        <div className='inputContact3'>
                            <label className="formLabelCont"><h3 className='titleInputContact'>Mensaje</h3>
                                <input className="formInputMessage" type='text' name='mensaje' placeholder='Mensaje' required />
                            </label>
                        </div>
                    </div>
                    <div className="buttonContact">
                        <button className="buttonContact" type="submit">enviar</button>
                    </div>
                </form>
            </main>
        </>
    )
}

