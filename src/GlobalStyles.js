import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root {
  --light: #e1f4cb;
  --medium: #bacba9;
  --dark: #3f4739;
  --highlight: #f1bf98;
  --button: #717568;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 112.5%;
  font-family: sans-serif;
  background: var(--medium);
}

button {
  border: none;
  border-radius: 5px;
  background: var(--button);
  color: #f1bf98;
  padding: 5px;
}

input {
  padding: 5px;
  border: 1px solid #3f4739;
  border-radius: 4px;
  flex-grow: none;
  width:60%
}
`
