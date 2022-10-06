import React from 'react';
import Footer from '../Styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom';

export default function footer() {

    const scrollTopUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div className='footerContainer'>
                <div className='footer'>
                        <button className='footerLogo' onClick={scrollTopUp}>
                            <img src='logo1.png' alt="logo" />
                        </button>
                    <div className='footerText'>
                        <h2>PRODUCTOS</h2>
                        <LinkRouter to='/cafes' href='#topCoffee'>Cafe</LinkRouter>
                        <LinkRouter to='/granel/peso' state={{ kilo: "1000" }}>Granel</LinkRouter>
                        <LinkRouter to='/'>Maquinas</LinkRouter>
                        <LinkRouter to='/tazas'>Accesorios</LinkRouter>
                        <LinkRouter to=''>Reciclaje</LinkRouter>
                    </div>
                    <div className='footerText'>
                        <h2>SOBRE NOSOTROS</h2>
                        <LinkRouter>Historia</LinkRouter>
                        <LinkRouter>Contacto</LinkRouter>
                        <LinkRouter>Ubicacion</LinkRouter>
                        <LinkRouter>Preguntas Frecuentes</LinkRouter>
                        <LinkRouter>Politicas de Envio</LinkRouter>

                    </div>
                    <div className='footerText'>
                        <h2>CLIENTE</h2>
                        <LinkRouter>Mi Cuenta</LinkRouter>
                        <LinkRouter>Mis Favoritos</LinkRouter>
                        <LinkRouter to='/login'>Acceso Clientes</LinkRouter>
                        <LinkRouter to='/signup'>Registrarse</LinkRouter>
                        <LinkRouter>Mis Puntos</LinkRouter>
                    </div>
                </div>
                <div className='footerSocial'>
                    <div className='footerIcon'>
                        <img src="logoface.png" alt="logo" />
                        <img src='logoinsta.png' alt="logo" />
                    </div>
                    <div className='footerPriv'>
                        <p>Términos de Uso</p>
                        <p>Condiciones de suministro</p>
                        <p>Política de privacidad</p>
                        <p>Política de cookies</p>
                        <p>Preferencias de cookies</p>
                    </div>
                </div>
            </div>
        </>
    )
}
