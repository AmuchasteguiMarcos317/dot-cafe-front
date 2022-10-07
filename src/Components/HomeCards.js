import React from 'react'
import '../Styles/HomeCards.css'
import { Link as LinkRouter } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import MarqueeCards from './MarqueeCards';

const cardsInfo = [
    { key: "1002", title: "Tazas de cerámicos sustentables", photo: "http://drive.google.com/uc?export=view&id=19E-heq9kuq38XO0VMR_oWqcgEXNosq7E", info: ["En Punto Café, estamos compromentidos con la sustentabilidad. al ver este logo, tenemos la certificacion de que el producto es 100% sustentable desde la extracción de materias primas hasta la reutilización o desecho al terminar la vida del producto. asi como hay etiquetas nutricionales que informan sobre las calorias en cientos productos, existen sistemas que informan sobre su sustentabilidad y aportan puntos para programas de edificacion sustentable."] },
    { key: "1003", title: "Tazas de cerámicos sustentables", photo: "http://drive.google.com/uc?export=view&id=19E-heq9kuq38XO0VMR_oWqcgEXNosq7E", info: ["En Punto Café, estamos compromentidos con la sustentabilidad. al ver este logo, tenemos la certificacion de que el producto es 100% sustentable desde la extracción de materias primas hasta la reutilización o desecho al terminar la vida del producto. asi como hay etiquetas nutricionales que informan sobre las calorias en cientos productos, existen sistemas que informan sobre su sustentabilidad y aportan puntos para programas de edificacion sustentable."] },
    { key: "1004", button: 'economia-circular', title: "Tazas de cerámicos sustentables", photo: "http://drive.google.com/uc?export=view&id=19E-heq9kuq38XO0VMR_oWqcgEXNosq7E", info: ["En Punto Café, estamos compromentidos con la sustentabilidad. al ver este logo, tenemos la certificacion de que el producto es 100% sustentable desde la extracción de materias primas hasta la reutilización o desecho al terminar la vida del producto. asi como hay etiquetas nutricionales que informan sobre las calorias en cientos productos, existen sistemas que informan sobre su sustentabilidad y aportan puntos para programas de edificacion sustentable."] },
]

export default function HomeCards() {
    return (
        <>
            <div className="homeCardsContainer">
                {cardsInfo.map(card => (
                    <div key={card.key} className="homeCardColor">
                        <div className="homeCardContainer">
                            <div className="homeCardPhotoContainer">
                                <img src={card.photo} alt="card"></img>
                            </div>
                            <div className="homeCardInfo">
                                <h3>{card.title}</h3>
                                <div className="homeCardTextContainer">
                                    {(card.info).map(text => (<p>{text}</p>))}
                                </div>
                                {
                                    card.button &&
                                    <LinkRouter className='homeBtn' to={card.button}>
                                        <button type="">Ver más</button>
                                    </LinkRouter>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Marquee pauseOnHover speed={80}>
                <MarqueeCards />
            </Marquee>

        </>
    )
}
