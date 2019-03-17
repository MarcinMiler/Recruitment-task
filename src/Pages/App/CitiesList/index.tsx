import * as React from 'react'

import { CityContainer } from '../CityContainer'

interface Props {
    cities: any[]
}

export const CitiesList: React.FC<Props> = ({ cities }) => (
    <>
        {cities.map((city, i) => (
            <CityContainer key={i} cityName={city.city} />
        ))}
    </>
)
