import * as React from 'react'

export const useLocalStorage = (key: string) => {
    const initialValue = () => window.localStorage.getItem(key) || ''
    const [value, setValue] = React.useState(initialValue)

    React.useEffect(() => {
        window.localStorage.setItem(key, value)
    }, [value])

    return { value, setValue }
}
