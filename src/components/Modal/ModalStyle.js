// bubble dialog: http://nicolasgallagher.com/pure-css-speech-bubbles/demo/
import styled, { css } from 'styled-components'

const ModalStyle = styled.div`
  ${({ type }) => {
    if (type === 'quickLoginModal') {
      return css`
        position: absolute;
        top: 75px;
        right: var(--spacing-m);
        display: flex;
        flex-direction: column;
        background-color: var(--color-white);
        padding: 2rem 1rem;
        border-radius: 10px;
        box-shadow: 2px 2px 15px rgba(79, 81, 80, 0.1);
        width: 300px;
        z-index: 1111;

        &:after {
          content: '';
          position: absolute;
          top: -15px; /* value = - border-top-width - border-bottom-width */
          right: 50px; /* controls horizontal position */
          border-width: 0 15px 15px; /* vary these values to change the angle of the vertex */
          bottom: auto;
          left: auto;
          border-style: solid;
          border-color: var(--color-white) transparent;
          /* reduce the damage in FF3.0 */
          display: block;
          width: 0;
        }
      `
    }

    if(type === 'cartModal') {
      return css`
        position: absolute;
        top: 70px;
        bottom: 0;
        right: 0;
        width: 100%;
        max-width: 400px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--color-white);
        z-index: 1111;
      `
    }
  }}
`

export default ModalStyle
