import * as React from 'react'

import { useAccordion } from '../../../Hooks'
import { CityContainer } from '../CityContainer'

interface Props {
    cities: any[]
}

export const CitiesContainer: React.FC<Props> = ({ cities }) => {
    const { openIndexes, handleClick } = useAccordion()

    return (
        <>
            {cities.map((city, i) => (
                <CityContainer
                    key={i}
                    i={i}
                    isOpen={openIndexes.includes(i)}
                    handleClick={handleClick}
                    cityName={city.city}
                />
            ))}
        </>
    )
}
