import * as React from 'react'

import { InputContainer } from './InputContainer'
import { CitiesList } from './CitiesContainer'
import { Container, Title, Wrapper } from './style'

export const AppPage: React.FC = () => {
    const [cities, setCities] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const fetchCities = (suggestion: any) => {
        setLoading(true)
        fetch(
            `https://api.openaq.org/v1/cities?country=${
                suggestion.code
            }&order_by=count&sort=desc&limit=10`
        )
            .then(res => res.json())
            .then(items => {
                setLoading(false)
                setCities(items.results)
            })
    }

    return (
        <Container>
            <Wrapper>
                <Title>The most polluted cities</Title>

                <InputContainer fetchCities={fetchCities} />
                {loading ? <p>loading</p> : <CitiesList cities={cities} />}
            </Wrapper>
        </Container>
    )
}
