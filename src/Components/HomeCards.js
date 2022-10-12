import React from 'react'
import '../Styles/HomeCards.css'
import { Link as LinkRouter } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import MarqueeCards from './MarqueeCards';
import NewLetter from './NewLetter';
const cardsBuy = [
    { id: 1, title: "ELEGÍ TU PRODUCTO", photo: "https://cdn-icons-png.flaticon.com/512/8070/8070478.png", text: "PASO 1", info: ["Selecciona el producto que te guste, maquina, tazas o si queres café donde podes elegir si lo querés llevar en grano o molido y si querés comprar una bolsa de 250grs,500grs o de 1kg."] },
    { id: 2, title: "PAGÁ EN FORMA SEGURA", photo: "https://cdn-icons-png.flaticon.com/512/4564/4564998.png", text: "PASO 2", info: ["Cobramos a través de Mercado Pago, la plataforma más segura del país. Aceptamos todas las tarjetas de crédito y débito."] },
    { id: 3, title: "RECIBILO EN 24HS", photo: "https://cdn-icons-png.flaticon.com/512/2830/2830312.png", text: "PASO 3", info: ["Llega por Correo Argentino a todo el país y tarda 24hs en llegar a tu domicilio. Tu númeroi de seguimiento servirá para rastrearlo."] },
]
const cardsInfo = [
    { id: 4, button: 'ver-todo', title: "Conoce nuestra cafeteria", photo: "http://drive.google.com/uc?export=view&id=1mbWBT7OldzGV1cuARyJfNTMdrD0o1HxH", info: ["En Punto Café, estamos compromentidos con la sustentabilidad. al ver este logo, tenemos la certificacion de que el producto es 100% sustentable desde la extracción de materias primas hasta la reutilización o desecho al terminar la vida del producto. asi como hay etiquetas nutricionales que informan sobre las calorias en cientos productos, existen sistemas que informan sobre su sustentabilidad y aportan puntos para programas de edificacion sustentable."] },
    { id: 5, button: 'sobre-nosotros', title: "Sobre Nosotros", photo: "http://drive.google.com/uc?export=view&id=1qGqWYQpk-ZW9OxanIcop8xXIdQ2oVnc3", info: ["Desde 1933 tostamos nuestro propio café.Lo cuidamos desde la selección de sus granos, hasta la taza, conservando el amor y el respeto que tenemos por lo que hacemos, desde el primer día. Por eso nuestro café es ÚNICO."] },
    { id: 6, button: 'economia-circular', title: "Tazas de cerámicos sustentables", photo: "http://drive.google.com/uc?export=view&id=156y9NLKx2cvp-ZyPCKLC-DGgOoF4t_a8", info: ["En Punto Café, estamos compromentidos con la sustentabilidad. al ver este logo, tenemos la certificacion de que el producto es 100% sustentable desde la extracción de materias primas hasta la reutilización o desecho al terminar la vida del producto. asi como hay etiquetas nutricionales que informan sobre las calorias en cientos productos, existen sistemas que informan sobre su sustentabilidad y aportan puntos para programas de edificacion sustentable."] },
]

export default function HomeCards() {
    return (
        <>
            <Marquee pauseOnHover speed={80}>
                <MarqueeCards />
            </Marquee>
            <LinkRouter className='buyBtn' to='ver-todo'>
                <button type="">COMPRA ONLINE</button>
            </LinkRouter>
            <div className="homeCardsContainer">
                {cardsInfo.map(card => (
                    <div key={card.id} className="homeCardColor">
                        <div className="homeCardContainer">
                            <div className="homeCardPhotoContainer">
                                <img src={card.photo} alt="card"></img>
                            </div>
                            <div className="homeCardInfo">
                                <h3>{card.title}</h3>
                                <div className="homeCardTextContainer">
                                    {(card.info).map(text => (<p key={new Date().getSeconds}>{text}</p>))}
                                </div>
                                {
                                    card.button &&
                                    <LinkRouter className='homeBtn' to={card.button}>
                                        <button>Ver más</button>
                                    </LinkRouter>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='buyH1'>TRES PASOS SENCILLOS PARA HACER TU COMPRA</h1>
            <div className='buyContainer'>
                {cardsBuy.map(card => (
                    <div className='buyBanner' key={card.id}>
                        <div className='buyDescription'>
                            <img src={card.photo} alt="icon"></img>
                            <h3>{card.title} </h3>
                        </div>
                        <div className='buyDescription'>
                            <h5>{card.text}</h5>
                        </div>
                        <div className='buyDescription'>
                            <p>{card.info}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                ))}
            </div>
            <NewLetter />
        </>
    )
}
