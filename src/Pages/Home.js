import { Button } from 'react-bootstrap'
import React from 'react'
import HomeCards from '../Components/HomeCards'
import Welcome from '../Components/Welcome'
import ProductCards from '../Components/ProductCards'

export default function Home() {
    return (
        <>
            <Welcome />
            <main>
                <HomeCards />
            </main>
        </>
    )
}
