import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: #222;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #3498db;

    &:hover {
      color: #2980b9;
    }
  }

  ul {
    list-style-type: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
