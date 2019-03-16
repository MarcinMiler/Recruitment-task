import * as React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import { InputContainer } from './'

const setup = (fetchCities = () => null) => {
    const utils = render(<InputContainer fetchCities={fetchCities} />)
    const input = utils.getByTestId('input')

    return {
        input,
        ...utils
    }
}

describe('Input Container', () => {
    afterEach(cleanup)

    it('should show suggestions with correct country', () => {
        const { input, getByText } = setup()

        fireEvent.change(input, { target: { value: 'Poland' } })

        const suggestion = getByText('Poland')

        // bug with ts typing
        // @ts-ignore
        expect(input.value).toBe('Poland')
        expect(suggestion.innerHTML).toBe('Poland')

        fireEvent.change(input, { target: { value: 'Spain' } })

        const suggestion2 = getByText('Spain')

        // @ts-ignore
        expect(input.value).toBe('Spain')
        expect(suggestion2.innerHTML).toBe('Spain')
    })

    it('should not show suggestion with wrong country', () => {
        const { input, getByText } = setup()

        fireEvent.change(input, { target: { value: 'Holand' } })

        // @ts-ignore
        expect(input.value).toBe('Holand')
        expect(() => getByText('Holand')).toThrowError()
    })

    it('should call fetch cities on suggestion click and clear suggestions', () => {
        const fetchCities = jest.fn()
        const { input, getByText } = setup(fetchCities)

        fireEvent.change(input, { target: { value: 'France' } })

        const suggestion = getByText('France')
        fireEvent.click(suggestion)

        // @ts-ignore
        expect(input.value).toBe('France')
        expect(fetchCities).toHaveBeenCalledTimes(1)
        expect(fetchCities).toBeCalledWith({
            id: 4,
            name: 'France',
            code: 'FR'
        })

        expect(() => getByText('France')).toThrowError()
    })
})
