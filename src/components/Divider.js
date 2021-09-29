import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    & span {
        margin: 0 0.5rem;
        font-size: 0.6rem;
    }
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

const Line = styled.div`
    width: 150px;
    height: 1px;
    background-color: var(--color-grey-dark);
`


const Divider = () => {
    return (
        <Wrapper>
            <Line /><span>OR</span><Line />
        </Wrapper>
    )
}

export default Divider
