import * as React from 'react'

import { Input } from '../../../Components'
import { useLocalStorage } from '../../../Hooks'

interface Props {
    fetchCities: (suggestion: Suggestion) => void
}

interface Suggestion {
    id: number
    name: string
    code: string
}

const suggestions: Suggestion[] = [
    { id: 1, name: 'Poland', code: 'PL' },
    { id: 2, name: 'Germany', code: 'DE' },
    { id: 3, name: 'Spain', code: 'ES' },
    { id: 4, name: 'France', code: 'FR' }
]

export const InputContainer: React.FC<Props> = ({ fetchCities }) => {
    const { value, setValue } = useLocalStorage('input')
    const [suggestion, setSuggestion] = React.useState<Suggestion[]>([])

    const filterSuggestions = (value: string) =>
        suggestions.filter(x =>
            x.name.toLowerCase().includes(value.toLowerCase())
        )

    const getInputProps = () => ({
        onChange: ({ target: { value } }: any) => {
            setValue(value)

            setSuggestion(filterSuggestions(value))
        },
        onFocus: () => setSuggestion(filterSuggestions(value)),
        value,
        placeholder: 'Type a country...'
    })

    const onSuggestionClick = React.useCallback(
        (suggestion: Suggestion) => {
            fetchCities(suggestion)
            setValue(suggestion.name)
            setSuggestion([])
        },
        [suggestion]
    )

    return (
        <Input
            sugesstions={suggestion}
            inputProps={getInputProps()}
            onSuggestionClick={onSuggestionClick}
        />
    )
}
