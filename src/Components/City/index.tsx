import * as React from 'react'

import { Container, Main, Text, ArrowIcon, Description } from './style'

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
}) => (
    <Container onClick={() => handleClick(i)} pose={isOpen ? 'open' : 'closed'}>
        <Main>
            <Text>{cityName}</Text>

            <ArrowIcon rotate180={isOpen ? 1 : 0} />
        </Main>

        <Description>{description}</Description>
    </Container>
)
