import { useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return (
        <></>
    );
}

export default ScrollToTop;