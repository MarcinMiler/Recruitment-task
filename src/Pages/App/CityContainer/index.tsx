import * as React from 'react'

import { City } from '../../../Components'

interface Props {
    cityName: string
}

export const CityContainer: React.FC<Props> = ({ cityName }) => {
    const [description, setDescription] = React.useState('')
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        fetch(
            `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${cityName}`
        )
            .then(res => res.json())
            .then(res => {
                const pageId = Object.keys(res.query.pages)

                setDescription(res.query.pages[pageId[0]].extract)
            })
        return () => {
            if (isOpen === true) setIsOpen(false)
        }
    }, [cityName])

    return (
        <City
            isOpen={isOpen}
            cityName={cityName}
            handleClick={() => setIsOpen(isOpen ? false : true)}
            description={description}
        />
    )
}
