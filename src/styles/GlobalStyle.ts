import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
   :root {
    --grey-100: #f5f5f5;
    --grey-200: #e0e0e0;
    --grey-300: #bdbdbd;
    --grey-400: #9e9e9e;
    --grey-500: #757575;
    --grey-600: #616161;
    --grey-700: #424242;
    --grey-800: #212121;
    --grey-900: #000000;

    --blue-200: #bbdefb;
    --blue-300: #90caf9;
    --blue-400: #64b5f6;
    --blue-500: #42a5f5;
    --blue-600: #2196f3;
    --blue-700: #1e88e5;

    --brand-1: #f44336;
    --brand-2: #e5cb3d;


    --title-1: 2rem;
    --title-2: 1.5rem;
    --title-3: 1.25rem;
    --text-1: 1rem;
    --text-2: 0.875rem;
    --text-3: 0.75rem;
  }

  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Tauri', sans-serif;
  }

  footer{
    margin-top: auto;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1{
    font-size: var(--title-1);
    font-weight: 700;
  }

  h2{
    font-size: var(--title-2);
    font-weight: 700;
  }

  h3{
    font-size: var(--title-3);
    font-weight: 500;
  }

  button{
    cursor: pointer;
    border: none;
  }

` 