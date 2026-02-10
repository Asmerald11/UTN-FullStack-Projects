import React from 'react'
import Approuter from './router/AppRouter'
import Nav from './Componentes/Navbar'
import Footer from './Componentes/Footer'
require('typeface-allura')

const Kakireact = () => {
    return (
        <>
        <div>
            <Nav />
            <Approuter />
            <Footer />
        </div>
        
        </>
    )
}

export default Kakireact

