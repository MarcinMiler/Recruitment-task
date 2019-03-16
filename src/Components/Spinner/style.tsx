import styled, { keyframes } from 'styled-components'

interface Props {
    size: number
    color?: string
}

const spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Container = styled.div<Props>`
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    border: 3px solid transparent;
    border-top: ${({ color }) =>
        color ? '3px solid ' + color : '3px solid white;'};
    border-radius: 50%;
    animation: ${spin} 0.6s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
`
