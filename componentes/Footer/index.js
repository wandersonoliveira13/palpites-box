import React from 'react'
import styles from '../styles.module.css'

const Footer = () => {
    return (
        <div className={styles.wrapperFooter}>
            <div className='container mx-auto text-center'>
                Projeto Desenvolvido por: <a href='https://infinityadm.com.br/' className='hover:underline'><b>Wanderson Oliveira</b></a>
            </div>
        </div>
    )
}

export default Footer