import React from 'react'
import '../Styles/HomeCards.css'

const cardsInfo = [
    {key: "1001", title: "Café filtros sustentables", photo: "/cafeFiltro.jpg", info: ["Es una suscripción gastronómica mensual que tiene como objetivo expandir la cultura del café de especialidad en Argentina brindando una experiencia distinta a nuestros socios.", "Con tu suscripción recibirás en tu casa u oficina café de especialidad (molido o en grano) de distintas variedades y tostadores.", "Además, según la suscripción que elijas, podrás recibir junto a tu café un fascículo de nuestro manual coleccionable (son 12 fascículos en total, uno por mes) para adentrarte en la cultura del café de especialidad y un regalo sorpresa para completar esta increíble experiencia."]},
    {key: "1002", title: "Café filtros sustentables", photo: "/cafeFiltro.jpg", info: ["En .Café queremos que conozcas realmente lo que es tomar un excelente café, fresco y de origen. Para eso contamos con el apoyo de tostadores profesionales argentinos que aman el café tanto como nosotros.", "Todos los meses conocerás el producto de distintos tostadores de la región, así como su historia."]},
    {key: "1003", title: "Café filtros sustentables", photo: "/cafeFiltro.jpg", info: ["Una vez que te suscribas a .Café, vas a recibir tu café la primer semana de cada mes.", "¡No te preocupes que en la primer entrega, resolvemos tu emergencia cafetera y te lo llevamos enseguida!"]},
    {key: "1004", title: "Café filtros sustentables", photo: "/cafeFiltro.jpg", info: ["Lo mejor que el mundo del café tiene para ofrecerte, sin salir de tu casa.", "Elegí disfrutar. Elegí .Café."]}
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
