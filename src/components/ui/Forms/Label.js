import styled, { css } from 'styled-components'

const Label = styled.label`
    font-size: 1rem;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 0;
    color: ${(props) => props.theme.colors.darkText};
    transition: 200ms ease all;
    ${({ shrink }) => shrink && css`
        left: -4px;
        top: -15px;
        color: ${(props) => props.theme.colors.lightText};
        font-size: .8rem;
    `}
`

export default Label