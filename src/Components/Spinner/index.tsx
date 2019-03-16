import * as React from 'react'

import { Container } from './style'

interface Props {
    size?: number
    color?: string
}

export const Spinner: React.FC<Props> = ({ size = 15, color }) => (
    <Container size={size} color={color} />
)
