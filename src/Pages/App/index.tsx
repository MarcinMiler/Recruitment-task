import * as React from 'react'
import { Container, Title, Wrapper } from './style'

import { Input } from '../../Components'

interface Props {}

export const AppPage: React.FC<Props> = () => (
    <Container>
        <Wrapper>
            <Title>Top polluted cities in countries</Title>

            <Input
                inputProps={{}}
                sugesstions={[]}
                onSuggestionClick={() => null}
            />
        </Wrapper>
    </Container>
)
