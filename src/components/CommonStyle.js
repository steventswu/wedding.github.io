import { createGlobalStyle } from 'styled-components'

const CommonStyle = createGlobalStyle`
 html{
    ${'' /* font-size: 100px; */}
    font-family: 'Satisfy', cursive;
 }
 html,body{
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
 }
 @media screen and (min-width: 1681px) {
    html {
        font-size:120px
    }
}
 @media screen and (max-width: 1680px) {
    html {
        font-size:100px
    }
}

@media screen and (max-width: 736px) {
    html {
        font-size:80px
    }
}

@media screen and (max-width: 414px) {
    html {
        font-size:60px
    }
}
@font-face{
    font-family: 'Satisfy', cursive;
}
`

export default CommonStyle
