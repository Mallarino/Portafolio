import React from 'react'

export default function Results({ number }) {

    const randomNumber = (
        Math.random() * (0.82 - 0.24) + 0.24
    ).toFixed(2);


    return (
        <div className='text-gray-500'>
            Cerca de {number} Resultados ({randomNumber} segundos)

        </div>
    )
}
