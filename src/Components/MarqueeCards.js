import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

export default function MarqueeCards() {
    return (
        <>
            <div className='marqueeContain'>
                <LinkRouter to='/maquinas'>
                    <img className='marqePhoto' src='https://www.rodo.com.ar/media/catalog/product/cache/855090a5c67e45b26c9e0d345e7592dc/p/i/piccolo_roja_1.jpg' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/maquinas'>
                    <img className='marqePhoto' src='https://res.cloudinary.com/pactcoffee/image/fetch/c_crop,f_auto,g_center,h_1500,q_auto,w_1000/https://media.pactcoffee.com/images/uploads/legacyproduct/649/sage_1_1280x1500.jpg' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/maquinas'>
                    <img className='marqePhoto' src='https://thecoffeebox.com.ar/media/__sized__/products/coffeemaker-classic-six-front-detail_1_grande_97f8cf74-0211-4a99-af6a-aef187297_oCZfn9f-thumbnail-540x540.png' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/maquinas'>
                    <img className='marqePhoto' src='https://thecoffeebox.com.ar/media/__sized__/products/bialetti_6_cup_oceana-thumbnail-540x540-70.jpg' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/granel/peso' state={{ kilo: "1000" }}>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1loIUmhegQtjryiBi_z_cV0ma9c6s4AAa' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/granel/peso' state={{ kilo: "1000" }}>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1xFb6vWxaZEH02NAZEmXzY_QVr7BwFOPT' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/granel/peso' state={{ kilo: "1000" }}>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=17gzO6uICJ-9bJ3YaE54Kqonah-MWFR1p' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/granel/peso' state={{ kilo: "1000" }}>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1I2ZVsTfMAdEUIulpUnTdMVyKI-aI3OWJ' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/tazas'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1XNC12Wt2qJWl2Ln2Hl_ZfXUbREY2qo6f' alt='image' width='250px' />
                </LinkRouter>
            </div>
            <div className='marqueeContain'>
                <LinkRouter to='/tazas'>
                    <img className='marqePhoto' src='http://drive.google.com/uc?export=view&id=1fFK0KxRD4N3RshzBHjsvI1tJh2r2fkOr' alt='image' width='250px' />
                </LinkRouter>
            </div>
        </>
    )
}
