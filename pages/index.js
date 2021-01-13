import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <p className='text-center mt-12'>
                A empresa INFINITY sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opnião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-6 py-4 font-bold text-white rounded-lg shadow-lg'> DAR OPINIÃO OU SUGESTÃO</a>
                </Link>
            </div>
        </div>
    )
}

export default Index