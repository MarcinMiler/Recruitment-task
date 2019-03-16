import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    position: relative;
`
export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 25px;
    font-size: 28px;
    font-weight: 300;
    background-color: white;
    box-shadow: 0px 0px 25px lightgray;
    transition: all 250ms ease;

    &:focus {
        box-shadow: 0px 0px 45px #a8a8a8;
    }
`
export const SuggestionWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 100px;
    left: 0;
    background-color: white;
    box-shadow: 0px 0px 45px #a8a8a8;
    z-index: 100;
`
export const Suggestion = styled.div`
    width: 100%;
    height: 80px;
    padding: 25px;
    font-weight: 300;
    font-size: 28px;
    transition: all 250ms ease;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #ededed;
    }
`
