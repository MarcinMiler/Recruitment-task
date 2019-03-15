import styled from 'styled-components'
import posed from 'react-pose'

interface Props {
    isOpen: boolean
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
export const Name = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 25px 0 25px;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 300;
`
export const Description = styled.div`
    width: 100%;
    padding: 25px;
    border-top: 1px solid #e0e0e0;
`
