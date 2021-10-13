import { createGlobalStyle } from 'styled-components'
import '@fontsource/amatic-sc'
import '@fontsource/josefin-slab'
import '@fontsource/open-sans'

const GlobalStyle = createGlobalStyle`
:root {
    box-sizing: border-box;
    font-size: 0.75rem;
    --color-primary: #D12626;
    --color-primary-lighter: #dd4242;
    --color-secondary: #3EAF4E;
    --color-white: #fff;
    --color-black: #504E4E;
    --color-grey-dark: #5A5858;
    --color-grey-medium: #F5F1EE;
    --color-grey-light: #F9F9F9;

    --font-display: 'Amatic SC', cursive;
    --font-body: 'Open Sans', sans-serif;
    --font-accent: 'Josefin Slab', serif;

    --spacing-s: 0.5rem;
    --spacing-m: 1.5rem;
    --spacing-l: 3rem;

    --maxWidth: 1200px;

  // Adaptation de la police
  @media (min-width: 500px) {
    :root {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 800px) {
    :root {
      font-size: 1rem;
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

main {
  max-width: var(--maxWidth);
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
}

h1, h2, h3 {
    font-family: var(--font-display);
    letter-spacing: 2px;
    margin-top: 0;
}

h1, h2 {
  font-size: 2.5rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: var(--color-white);
}

p {
  margin: 0;
  text-align: left;
}

button {
  border: none;
  outline: none;
}

.visibility-hidden {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
section + *,
header + *, ul + *  {
  margin-top: var(--spacing-l);
}

p + *, button + *, div + button, article + article {
  margin-top: var(--spacing-m);
}

ul {
  margin-top: var(--spacing-l);
}


main {
  margin-top: var(--spacing-l);
  margin-bottom: var(--spacing-l);
  padding: var(--spacing-l) var(--spacing-m);
}

/* STRIPE */
.StripeElement--webkit-autofill {
  background: transparent !important;
}

.StripeElement {
  width: 100%;
  padding: 11px 15px 11px 0;
}

`

export default GlobalStyle
