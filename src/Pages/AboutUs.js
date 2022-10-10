import React from 'react'
import '../Styles/AboutUs.css'

export default function AboutUs() {

    return (
        <>
            <div className='aboutUsBanner'>
                <div className='titleAboutUs'>
                    <h2>SOBRE NOSOTROS</h2>
                </div>
            </div>
            <div className='aboutUsContainer'>
                <div className='aboutImg'>
                    <div className='imgAboutcontainer'>
                        <img className='imgAboutUs' src='aboutus.jpg' alt="cafe" />
                    </div>
                </div>
                <div className='aboutText'>
                    <h2>Nuestra Historia</h2>
                    <p>Desde 1933 tostamos nuestro propio café.
Lo cuidamos desde la selección de sus granos, hasta la taza, conservando el amor y el respeto que tenemos por lo que hacemos, desde el primer día. Por eso nuestro café es ÚNICO.
A través de nuestro proceso exclusivo de tostación, logramos resaltar las notas y características propias de los diferentes granos. Un aroma pleno y un sabor con cuerpo, con un toque de frescura, es lo que hace inconfundible a un .Cafe, siempre..</p>
                </div>
            </div>

            <div className='aboutUsContainer1'>
                <div className='aboutImg'>
                    <div className='imgAboutcontainer'>
                        <img className='imgAboutUs' src='aboutus3.jpg' alt="cafe" />
                    </div>
                </div>
                <div className='aboutText'>
                <h2>Nuestra Misión</h2>
                    <p>Inspirar y nutrir el espíritu humano: Una persona, una taza y una comunidad a la vez.</p>
                </div>
            </div>
            <div className='aboutUsBanner2'>
                <div className='titleAboutUs'>
                </div>
            </div>
        </>
    )
}