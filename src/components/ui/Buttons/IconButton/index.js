import React from 'react'
import styled from 'styled-components'

const Base = styled.span`
    width: fit-content;
    height: fit-content;
    padding: .3rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 300ms ease-in-out;
    & :hover {
        background-color: rgba(255, 255, 255, .3);
        transform: scale(1.2);
    }
`

const IconButton = ({children, onClick}) => {
    return (
        <Base onClick={onClick}>
            {children}
        </Base>
    )
}

export default IconButton
