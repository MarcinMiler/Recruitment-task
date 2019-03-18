import * as React from 'react'

import { Spinner } from '../../Components'
import { InputContainer } from './InputContainer'
import { CitiesList } from './CitiesList'
import { Container, Title, Wrapper, LoadingWrapper } from './style'

export const AppPage: React.FC = () => {
    const [cities, setCities] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const fetchCities = (suggestion: any) => {
        setLoading(true)

        // docs: https://docs.openaq.org/#api-Measurements
        // correct endpoint for seraching the most polluted cities but it didnt work
        // https://api.openaq.org/v1/measurements?country=PL&parameter=pm25&order_by=value&limit=10&sort=desc

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

                {loading ? (
                    <LoadingWrapper>
                        <Spinner size={100} color="black" />
                    </LoadingWrapper>
                ) : (
                    <CitiesList cities={cities} />
                )}
            </Wrapper>
        </Container>
    )
}
