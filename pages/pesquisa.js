import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return(
        <div>
            <h1 className='text-center mt-8 font-bold text-2xl'>Críticas e Sugestões</h1>
            <p className='text-center my-3'>
                A empresa INFINITY sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opnião.
            </p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu Nome:</label>
                <input type='text' className='p-2 block shadow bg-blue-100 m-2 rounded'></input>
            </div>
        </div>
    )
}

export default Pesquisa