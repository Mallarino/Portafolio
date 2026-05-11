import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Results({ number }) {

    const randomNumber = (
        Math.random() * (0.82 - 0.24) + 0.24
    ).toFixed(2);

    const { t } = useTranslation() 

    const partOne = t("results.partOne")
    const partTwo = t("results.partTwo")
    const segundos = t("results.segundos")

    return (
        <div className='text-gray-500'>
            {partOne +" "+ number +" "+ partTwo +" ("+ randomNumber +" "+ segundos +")"}

        </div>
    )
}
