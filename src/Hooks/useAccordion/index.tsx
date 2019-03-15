import * as React from 'react'

export const useAccordion = () => {
    const [openIndexes, setOpenIndexes] = React.useState<number[]>([])

    const handleClick = (index: number) => {
        const close = openIndexes.includes(index)

        close
            ? setOpenIndexes(openIndexes.filter(i => i !== index))
            : setOpenIndexes([...openIndexes, index])
    }

    return React.useMemo(() => ({ openIndexes, handleClick }), [openIndexes])
}
