import { renderHook, cleanup, act } from 'react-hooks-testing-library'

import { useAccordion } from './'

describe('useAccordion', () => {
    afterEach(cleanup)

    it('should initialize correctly', () => {
        const { result } = renderHook(() => useAccordion())

        expect(result.current.openIndexes).toEqual([])
    })

    it('should open proper index', () => {
        const { result } = renderHook(() => useAccordion())

        act(() => result.current.handleClick(2))

        expect(result.current.openIndexes).toEqual([2])
    })

    it('should close opened index', () => {
        const { result } = renderHook(() => useAccordion())

        // open and close
        act(() => result.current.handleClick(2))
        act(() => result.current.handleClick(2))

        // open index 1
        act(() => result.current.handleClick(1))

        expect(result.current.openIndexes).toEqual([1])
    })
})
