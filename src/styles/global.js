import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "lato", sans-serif;
        color: #000;
        background-color: #fff;
        line-height: 1.4;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Karla", sans-serif;
        letter-spacing: 4px;
        margin: 0;
        padding: 0;
    }
`