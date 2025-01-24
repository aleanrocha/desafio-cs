import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", serif;
    text-decoration: none;
    outline: none;
  }
  :root {
    --primary-color: #1e4175; 
    --secondary-color: #f2f9fc; 
    --tertiary-color: #e5f3fa; 
    --highlight-color: #199fe3;
    --light-text: #fafafa; 
    --border-color: #bdc3c7; 
    --error-color: #e74c3c; 
  }
`
