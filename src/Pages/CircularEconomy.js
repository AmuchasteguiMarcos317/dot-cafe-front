import React from 'react'
import '../Styles/EconomyCircular.css'

function CircularEconomy() {


    const cardsEconomyCircular = [
        { key: "001001", title: "Compromiso composta", photo: "http://drive.google.com/uc?export=view&id=12uxYB8CXYI7koAQYXBWvfwOds8xhDY24", info: ["En la actualidad se estan creando en diferentes puntos de la ciudad, donde se destina a la creacion de abonos y sustratos por su alto contenido nutricional. Esto no sucede con los plasticos ni aluminios, que necesitan un tratamiento distinto para no convertirse en basura ambiental. Nuestros vasos son 100% de caña de azúcar que son biodegradables, y nos brinda excelentes ventajas: su resistencia, no liberan plastificantes, sino que garantiza una experiencia de sabor sin adulterar y sostenible en el tiempo. Claramente la compostabilidad."] },
        { key: "001002", title: "Conciencia colectiva", photo: "http://drive.google.com/uc?export=view&id=1VAd8tUcGnWSHxw_m4_Z3Qzur1zHpRCz8", info: ["La economía circular representa un cambio que requiere de educación, capacitación y conocimiento, pero sobre todo de responsabilidad. Para comenzar a transitar hacia ella, hay que tener en cuenta varios consejos: Cambiar los hábitos, tomar conciencia y aplicar las medidas para reducir la generación de residuos. Muchos de los artículos que se consumen pueden tener un segundo uso si está en buenas condiciones, por ejemplo, la ropa e incluso muebles. Ser conscientes y estar informados sobre el resultado del destino que tendrán los productos que utilizamos. La mayoría de los desechos terminan en un vertedero, una acción sencilla es reciclar plásticos, vidrio, pet y cartón. En el país existen empresas y hasta pequeños emprendimientos dedicados a la recolección de estos materiales para ser llevados a plantas de reciclaje.Adquirir productos que sean de calidad es una inversión, los hace más duraderos y evita desecharlos en el corto plazo."] },
        { key: "001003", title: "Economía circular", photo: "http://drive.google.com/uc?export=view&id=1ppjAb2VKu5o4wR_4eh2RmipbEla1QR9V", info: ["El municipio de Godoy Cruz (Mendoza) está llevando a cabo una iniciativa denominada “Café circular”. La propuesta invita a los vecinos a pedir café para llevar en un vaso retornable, que luego se puede devolver en cualquiera de los negocios adheridos. Quienes participen deben dejar una seña que será reintegrada al ser devuelto el vaso utilizado o puede comprar el recipiente y utilizarlo en cualquier momento. Todos los envases utilizados son 100% lavables y reutilizables, aptos para el consumo de bebidas calientes y 100% reciclables al final de su vida útil."] },
        { key: "001004", title: "Compromiso Corporativo", photo: "http://drive.google.com/uc?export=view&id=11ht5B8sBxePs8KEzGCm56Egu7afxIZAD", info: ["Una de las empresas que más ha hecho en este camino circular para conseguir un mundo con menos plástico, pero también para implementar la EC a gran escala es la variante de Nestlé, Nespresso, quien presenta una amplia carta para el reciclaje de los residuos: “El 96% de los consumidores Nespresso disponen de un punto de recogida de cápsulas usadas a menos de 5 kilómetros de sus hogares”, explicó Nayara Fuentes, responsable de Sostenibilidad de Nespresso España."] }
    ]

    return (
        <>
            <div className='bannerCoffeeEconomy'>
                <div className='divLogoBanner'>
                    <div className='divLogoEcoFriendly' >
                        <img className='logoEcoFriendly' src="http://drive.google.com/uc?export=view&id=1W5Xn2yPSVGVWcJ0UI4Olm84jaLnjgTPr" alt="ecoFriendly" />
                    </div>
                    <div className='divLogoDotCoffee'>
                        <img className='logoNameDotCoffee' src="http://drive.google.com/uc?export=view&id=1JA6oPavaVm3AwH7Epj7TLlfcMRmVhkjr" alt="logoName" />
                    </div>
                </div>
            </div>
            <div className="homeCardsContainer">
                {cardsEconomyCircular.map(card => (
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

export default CircularEconomy