import * as React from 'react'

import { City } from '../../../Components'

interface Props {
    i: number
    isOpen: boolean
    cityName: string
    handleClick: (i: number) => void
}

export const CityContainer: React.FC<Props> = ({
    i,
    isOpen,
    cityName,
    handleClick
}) => {
    const [description, setDescription] = React.useState('')

    React.useEffect(() => {
        fetch(
            `https://pl.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${cityName}`
        )
            .then(res => res.json())
            .then(res => {
                const pageId = Object.keys(res.query.pages)

                setDescription(res.query.pages[pageId[0]].extract)
            })
    }, [cityName])

    return (
        <City
            i={i}
            isOpen={isOpen}
            cityName={cityName}
            handleClick={handleClick}
            description={description}
        />
    )
}
