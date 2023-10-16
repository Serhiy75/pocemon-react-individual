import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
ul,ol{
    margin: 0;
    padding: 0;
    list-style: none;

}
h1,h2,h3,h4,h5,h6,p{
    margin: 0;
}
img{
    max-width: 100%;
    display: block;
    height: auto;
}
a{
    text-decoration: none;
}
button{
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
`;
