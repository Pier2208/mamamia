import { createGlobalStyle } from 'styled-components'
import '@fontsource/amatic-sc';
import '@fontsource/josefin-slab';

const GlobalStyle = createGlobalStyle`
:root {
    box-sizing: border-box;
    font-size: 0.75rem;
    --color-primary: #D12626;
    --color-secondary: #3EAF4E;
    --color-white: #fff;
    --color-black: #504E4E;
    --color-grey-dark: #5A5858;
    --color-grey-medium: #F5F1EE;
    --color-grey-light: #F9F9F9;

    --font-display: 'Amatic SC', cursive;
    --font-body: 'Josefin Slab', serif;

    --spacing-s: 0.5rem;
    --spacing-m: 1.5rem;
    --spacing-l: 3rem;

  // Adaptation de la police
  @media (min-width: 500px) {
    :root {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 800px) {
    :root {
      font-size: 1.1rem;
    }
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    color: var(--color-black);
    line-height: 1.5;
    font-family: var(--font-body);
  }

h1, h2, h3 {
    font-family: var(--font-display);
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

p {
  margin: 0;
  text-align: left;
}

.visibility-hidden {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

figure {
  max-width: 100%;
}

form {
  width: 100%;
}

/* RYTHME VERTICAL */


`

export default GlobalStyle
