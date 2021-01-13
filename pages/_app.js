import React from 'react'
import Screens from '../componentes/Screens'
import '../css/style.css'



const Myapp = ({ Component, pageProps}) => {
    return (
        <div>
            <Screens>
                <Component {...pageProps} />
            </Screens>
            

        </div>
    )
}

export default Myapp