import React from 'react';
import Footer from '../Styles/Footer.css'

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
                    <div className='footerLogo'>
                        <button onClick={scrollTopUp}>
                            <img src='logo1.png' alt="logo" />
                        </button>
                    </div>
                    <div className='footerText'>
                        <h2>PRODUCTOS</h2>
                        <p>Cafe</p>
                        <p>Granel</p>
                        <p>Maquinas</p>
                        <p>Accesorios</p>
                        <p>Reciclaje</p>
                    </div>
                    <div className='footerText'>
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Historia</p>
                        <p>Contacto</p>
                        <p>Ubicacion</p>
                        <p>Preguntas Frecuentes</p>
                        <p>Politicas de Envio</p>

                    </div>
                    <div className='footerText'>
                        <h2>CLIENTE</h2>
                        <p>Mi Cuenta</p>
                        <p>Mis Favoritos</p>
                        <p>Acceso Clientes</p>
                        <p>Registrarse</p>
                        <p>Mis Puntos</p>
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
