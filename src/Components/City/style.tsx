import styled from 'styled-components'
import posed from 'react-pose'

import { FiChevronDown } from 'react-icons/fi'

interface ArrowProps {
    rotate180: number
}

export const Animation = posed.div({
    closed: { height: '80px' },
    open: { height: 'auto' }
})
export const Container = styled(Animation)`
    width: 100%;
    margin-top: 20px;
    background-color: white;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
`
export const Main = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 25px 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Text = styled.p`
    font-size: 22px;
    font-weight: 300;
`
export const ArrowIcon = styled(FiChevronDown)<ArrowProps>`
    font-size: 28px;
    color: black;
    transform: ${({ rotate180 }) =>
        rotate180 ? 'rotate(180deg)' : 'rotate(0)'};
    transition: all 200ms ease;
`
export const Description = styled.div`
    width: 100%;
    padding: 25px;
    border-top: 1px solid #e0e0e0;
`
