import * as React from 'react'

import { Container, StyledInput, SuggestionWrapper, Suggestion } from './style'

interface Props {
    sugesstions: Suggestion[]
    onSuggestionClick: (suggestion: Suggestion) => void
    inputProps: object
}
interface Suggestion {
    name: string
}

export const Input: React.FC<Props> = ({
    sugesstions,
    inputProps,
    onSuggestionClick
}) => (
    <Container>
        <StyledInput {...inputProps} />

        {sugesstions.length > 0 && (
            <SuggestionWrapper>
                {sugesstions.map(suggestion => (
                    <Suggestion onClick={() => onSuggestionClick(suggestion)}>
                        {suggestion.name}
                    </Suggestion>
                ))}
            </SuggestionWrapper>
        )}
    </Container>
)
