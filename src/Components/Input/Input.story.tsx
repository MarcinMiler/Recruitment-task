import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from './'

const suggestions = [
    { id: 1, name: 'Poland' },
    { id: 2, name: 'Germany' },
    { id: 3, name: 'Spain' },
    { id: 4, name: 'France' }
]

const Wrapper = styled.div`
    padding: 50px;
`

const inputProps = {
    onChange: action('Input changed state'),
    onFocus: action('Input focus'),
    onBlur: action('Input blur')
}

storiesOf('Input', module)
    .add('basic', () => (
        <Wrapper>
            <Input
                inputProps={inputProps}
                sugesstions={[]}
                onSuggestionClick={() => null}
            />
        </Wrapper>
    ))
    .add('with suggestions', () => (
        <Wrapper>
            <Input
                inputProps={inputProps}
                sugesstions={suggestions}
                onSuggestionClick={action('Suggestion Clicked')}
            />
        </Wrapper>
    ))
