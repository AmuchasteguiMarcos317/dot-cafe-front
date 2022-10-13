import React from 'react'
import '../Styles/EconomyCircular.css'

function EcoArt() {


    const cardsEcoArt = [
        { key: "001001", title: "Reciclaje y Arte", photo: "http://drive.google.com/uc?export=view&id=1AmoABbt6mdcIFHCwE2VAh0lMwLeurUYZ", info: ["Dentro de una sociedad de consumo como la nuestra, el desarrollo de piezas de arte basadas en la reutilización de materiales de deshecho es cada vez más frecuente."] },
        { key: "001004", title: "Arte y Sustentabilidad", photo: "http://2.bp.blogspot.com/-gH7LrEwiPxc/VWc3PDWgMPI/AAAAAAAAs6A/nmbyi6eGVRo/s1600/Nespresso-184.jpg", info: ["Estas coloridas cápsulas de café han inundado el mercado, y con ello han creado un grave problema de residuos. Aprende que es lo que puedes hacer con ellas echándole un vistazo a esta sección."] },
        { key: "001003", title: "Economía circular", photo: "http://drive.google.com/uc?export=view&id=1MHEXbkzctnXnSH2gFa7PwvsKQ7nORMNe", info: ["El municipio de Godoy Cruz (Mendoza) está llevando a cabo una iniciativa denominada “Café circular”. La propuesta invita a los vecinos a pedir café para llevar en un vaso retornable, que luego se puede devolver en cualquiera de los negocios adheridos. Quienes participen deben dejar una seña que será reintegrada al ser devuelto el vaso utilizado o puede comprar el recipiente y utilizarlo en cualquier momento. Todos los envases utilizados son 100% lavables y reutilizables, aptos para el consumo de bebidas calientes y 100% reciclables al final de su vida útil."] }
    ]

    return (
        <>
            <div className='bannerCoffeeEconomy'>
                <div className='divLogoBanner'>
                    {/* <div className='divLogoEcoFriendly' >
                        <img className='logoEcoFriendly' src="http://drive.google.com/uc?export=view&id=1W5Xn2yPSVGVWcJ0UI4Olm84jaLnjgTPr" alt="ecoFriendly" />
                    </div>
                    <div className='divLogoDotCoffee'>
                        <img className='logoNameDotCoffee' src="http://drive.google.com/uc?export=view&id=1JA6oPavaVm3AwH7Epj7TLlfcMRmVhkjr" alt="logoName" />
                    </div> */}
                </div>
            </div>
            <div className="homeCardsContainer">
                {cardsEcoArt.map(card => (
                    <div key={card.key} className="homeCardColor">
                        <div className="homeCardContainer">
                            <div className="homeCardPhotoContainer">
                                <img src={card.photo} className="imgCircularEconomy" alt="card"></img>
                            </div>
                            <div className="homeCardInfo">
                                <h3>{card.title}</h3>
                                <div className="homeCardTextContainer">
                                    {(card.info).map(text => (<p key={new Date().getSeconds}>{text}</p>))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default EcoArt