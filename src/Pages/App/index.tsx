import * as React from 'react'

import { InputContainer } from './InputContainer'
import { Container, Title, Wrapper } from './style'

export const AppPage: React.FC = () => (
    <Container>
        <Wrapper>
            <Title>Top polluted cities in countries</Title>

            <InputContainer fetchCities={() => null} />
        </Wrapper>
    </Container>
)
