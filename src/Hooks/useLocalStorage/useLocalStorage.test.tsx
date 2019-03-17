import { renderHook, cleanup, act } from 'react-hooks-testing-library'

import { useLocalStorage } from './'

describe('useLocalStorage', () => {
    afterEach(cleanup)

    it('should initialize correctly', () => {
        const { result } = renderHook(() => useLocalStorage('key'))

        expect(result.current.value).toBe('')
    })

    it('should save value to localStorage after setting value', () => {
        const key = 'key'
        const { result } = renderHook(() => useLocalStorage(key))

        act(() => result.current.setValue('value'))

        expect(result.current.value).toBe('value')
        expect(localStorage.getItem(key)).toBe('value')
    })
})
