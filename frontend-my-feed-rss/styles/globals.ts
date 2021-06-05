import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #0091FF;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #0066B3;
  
}

`
