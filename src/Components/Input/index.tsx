import * as React from 'react'

import { Container, StyledInput, SuggestionWrapper, Suggestion } from './style'

interface Props {
    sugesstions: Suggestion[]
    inputProps: object
    onSuggestionClick: (suggestion: Suggestion) => void
}

interface Suggestion {
    id: number
    name: string
    code: string
}

export const Input: React.FC<Props> = ({
    sugesstions,
    inputProps,
    onSuggestionClick
}) => (
    <Container>
        <StyledInput data-testid="input" {...inputProps} />

        {sugesstions.length > 0 && (
            <SuggestionWrapper>
                {sugesstions.map(suggestion => (
                    <Suggestion
                        key={suggestion.id}
                        onClick={() => onSuggestionClick(suggestion)}
                    >
                        {suggestion.name}
                    </Suggestion>
                ))}
            </SuggestionWrapper>
        )}
    </Container>
)
