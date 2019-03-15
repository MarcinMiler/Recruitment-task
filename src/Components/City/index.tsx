import * as React from 'react'

import { Container, Name, Description } from './style'

interface Props {
    i: number
    isOpen: boolean
    cityName: string
    description: string
    handleClick: (i: number) => void
}

export const City: React.FC<Props> = ({
    i,
    isOpen,
    cityName,
    description,
    handleClick
}) => {
    return (
        <Container
            onClick={() => handleClick(i)}
            pose={isOpen ? 'open' : 'closed'}
        >
            <Name>{cityName}</Name>

            <Description>{description}</Description>
        </Container>
    )
}
