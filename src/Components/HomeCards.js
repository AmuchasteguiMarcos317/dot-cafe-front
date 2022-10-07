import React from 'react'
import '../Styles/HomeCards.css'
import { Link as LinkRouter } from 'react-router-dom'
import Marquee from "react-fast-marquee";

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
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/p/i/piccolo_roja_1.jpg' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/649/sage_1_1280x1500.jpg' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='https://thecoffeebox.com.ar/media/__sized__/products/coffeemaker-classic-six-front-detail_1_grande_97f8cf74-0211-4a99-af6a-aef187297_oCZfn9f-thumbnail-540x540.png' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='https://thecoffeebox.com.ar/media/__sized__/products/bialetti_6_cup_oceana-thumbnail-540x540-70.jpg' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1loIUmhegQtjryiBi_z_cV0ma9c6s4AAa' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1xFb6vWxaZEH02NAZEmXzY_QVr7BwFOPT' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=17gzO6uICJ-9bJ3YaE54Kqonah-MWFR1p' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1I2ZVsTfMAdEUIulpUnTdMVyKI-aI3OWJ' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1XNC12Wt2qJWl2Ln2Hl_ZfXUbREY2qo6f' alt='image' width='250px' />
                </div>
                <div className='marqueeContain'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1fFK0KxRD4N3RshzBHjsvI1tJh2r2fkOr' alt='image' width='250px' />
                </div>
            </Marquee>

        </>
    )
}
