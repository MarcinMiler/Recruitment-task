import * as React from 'react'

import { Input } from '../../../Components'

interface Props {
    fetchCities: (suggestion: Suggestion) => void
}

interface Suggestion {
    id: number
    name: string
}

const suggestions = [
    { id: 1, name: 'Poland' },
    { id: 2, name: 'Germany' },
    { id: 3, name: 'Spain' },
    { id: 4, name: 'France' }
]

export const InputContainer: React.FC<Props> = ({ fetchCities }) => {
    const [value, setValue] = React.useState('')
    const [suggestion, setSuggestion] = React.useState<Suggestion[]>([])

    const getInputProps = () => ({
        onChange: ({ target: { value } }: any) => {
            setValue(value)
            const filter = suggestions.filter(x =>
                x.name.toLowerCase().includes(value.toLowerCase())
            )
            setSuggestion(filter)
        },
        onBlur: () => setSuggestion([]),
        value
    })

    return (
        <Input
            sugesstions={suggestion}
            inputProps={getInputProps()}
            onSuggestionClick={suggestion => fetchCities(suggestion)}
        />
    )
}
