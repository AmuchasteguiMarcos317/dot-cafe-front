import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'


export default function CafeLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
