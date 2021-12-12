import { createGlobalStyle } from 'styled-components'

const CommonStyle = createGlobalStyle`
 html,body{
    font-family: 'OzCaramel', cursive;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
 }
 @media screen and (max-width: 1680px) {
    html {
        font-size:80px
    }
}

@media screen and (max-width: 736px) {
    html {
        font-size:80px
    }
}

@media screen and (max-width: 414px) {
    html {
        font-size:50px
    }
}
@font-face {
  font-family: 'OzCaramel';
  src: local('OzCaramel'), url('../assets/fonts/OzCaramel.ttf') format('truetype');
}
`

export default CommonStyle
