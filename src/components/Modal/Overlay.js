import styled from 'styled-components'

const Overlay = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1000 !important; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */  
`

export default Overlay