import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html {
  font-size: 62.5%;
  height: 100%;
}


body {
    background: #FFFFFF;
    color: #212121;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
}

body, #root {
    /* min-height: 100vh; */
    position: relative;
    display: flex;
    flex-direction: column;
}

#root {
  max-width: 128rem;
  padding: 3rem 3.2rem 0 3.2rem;
}

h1, h2, h3, h4, h5, h6, input, label, strong, span, button {
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
  background: none;
  cursor: pointer;
  border: 0;
  transition: 180ms ease-in-out;
}

button {
  cursor: pointer;
}

`;
